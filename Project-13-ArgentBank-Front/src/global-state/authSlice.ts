import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    firstName: string;
    lastName: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    firstName: '',
    lastName: '',
    status: 'idle',
    error: null,
};

// createAsyncThunk to handle the login request
export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            console.log("response for login: ", response)

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.message);
            }

            const responseData = await response.json();
            return responseData.body.token;
        } catch (error) {
            return rejectWithValue('An error occurred. Please try again later.');
        }
    }
);

// createAsyncThunk to handle the update of the user's name
export const updateName = createAsyncThunk(
    'auth/updateName',
    async ({ firstName, lastName }: { firstName: string; lastName: string }, { getState, rejectWithValue }) => {
        const state = getState() as { auth: AuthState };
        const token = state.auth.token;

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ firstName, lastName }),
            });
            console.log('response for updateName: ', response)

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.message);
            }

            const responseData = await response.json();
            console.log('new name', responseData.body)

            return responseData.body;
        } catch (error) {
            return rejectWithValue('An error occurred while updating the name. Please try again later.');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearToken(state) {
            state.token = null;
            state.isAuthenticated = false;
            state.firstName = '';
            state.lastName = '';
            state.status = 'idle';
            state.error = null;
        },
        setUser(state, action: PayloadAction<string>) {
            state.isAuthenticated = true;
            state.firstName = action.payload;
        },
        clearUser(state) {
            state.isAuthenticated = false;
            state.firstName = '';
            state.lastName = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(updateName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateName.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.error = null;
            })
            .addCase(updateName.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { clearToken, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;