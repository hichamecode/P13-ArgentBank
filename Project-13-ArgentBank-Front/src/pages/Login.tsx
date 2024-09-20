import './Login.scss';
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from '../global-state/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../global-state/store'; 
import CookieHandler from '../utils/CookieHandler';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.auth);

  const schema = z.object({
    email: z.string().email({ message: 'The email format is invalid' }),
    password: z.string().min(8, { message: 'The password must be at least 8 characters long' })
  });

  type FormFields = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const resultAction = await dispatch(login(data));

      if (login.fulfilled.match(resultAction)) {
        const token = resultAction.payload;
        
        CookieHandler.setCookie('authToken', token, 7); 
        CookieHandler.getCookie('authToken');
        navigate('/profile');

      } else if (login.rejected.match(resultAction)) {

        setError('root', { 
          type: 'manual',
          message: resultAction.payload as string || 'An error occurred during login'
        });
      }
    } catch (error) {
      console.error('An unexpected error occurred', error);
      setError('root', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1 className='sign-in-title'>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input {...register("email")} type="text" id="username" />
              {errors.email && <span className='error-text'>{errors.email.message}</span>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input {...register("password")} type="password" id="password" />
              {errors.password && <span className='error-text'>{errors.password.message}</span>}
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button disabled={status === 'loading'} type='submit' className="sign-in-button">
              {status === 'loading' ? "Loading ..." : "Sign In"}
            </button>
          </form>
          {error && <span className='error-text'>{error}</span>}
        </section>
      </main>
    </Layout>
  );
}

export default Login;