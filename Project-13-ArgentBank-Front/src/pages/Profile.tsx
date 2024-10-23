import './Profile.scss';
import Account from '../components/Account';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateType, updateName, fetchUserName } from '../global-state/authSlice';

export default function Profile() {
    const dispatch = useDispatch();
    const firstName = useSelector((state: stateType) => state.auth.firstName);
    const lastName = useSelector((state: stateType) => state.auth.lastName);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [localFirstName, setLocalFirstName] = useState(firstName);
    const [localLastName, setLocalLastName] = useState(lastName);

    useEffect(() => {
        dispatch(fetchUserName());
    }, [dispatch]);

    useEffect(() => {
        setLocalFirstName(firstName);
        setLocalLastName(lastName);
    }, [firstName, lastName]);

    const handleOpenModal = () => {
        setLocalFirstName(firstName);
        setLocalLastName(lastName);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChangeName = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(updateName({ firstName: localFirstName, lastName: localLastName }))
            .then(() => {
                setIsModalOpen(false);
            })
            .catch(error => {
                console.error("Failed to update name:", error);
                setLocalFirstName(firstName);
                setLocalLastName(lastName);
            });
    };

    return (
        <Layout>
            <main className="main bg-dark">
                <div className="header-account">
                    <h1>Welcome back<br />{firstName} {lastName}</h1>
                    <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account
                    title='Argent Bank Checking (x8349)'
                    amount={2082.79}
                    currency='$'
                    description='Available Balance'
                />
                <Account
                    title='Argent Bank Savings (x6712)'
                    amount={10928.42}
                    currency='$'
                    description='Available Balance'
                />
                <Account
                    title='Argent Bank Credit Card (x8349)'
                    amount={184.30}
                    currency='$'
                    description='Current Balance'
                />
            </main>

            {isModalOpen && (
                <div className='modal'>
                    <h2>Enter your Name</h2>
                    <form className='modal-form' onSubmit={handleChangeName}>
                        <div className="modal-form-group">
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                className='modal-form-input'
                                type='text'
                                id='firstName'
                                name='firstName'
                                placeholder='First name'
                                value={localFirstName}
                                onChange={(e) => setLocalFirstName(e.target.value)}
                            />
                        </div>
                        <div className="modal-form-group">
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                className='modal-form-input'
                                type='text'
                                id='lastName'
                                name='lastName'
                                placeholder='Last name'
                                value={localLastName}
                                onChange={(e) => setLocalLastName(e.target.value)}
                            />
                        </div>
                        <div className='modal-btn-container'>
                            <button type='submit' className='edit-button modal-btn-container-btn'>Save</button>
                            <button type='button' className='edit-button modal-btn-container-btn' onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </Layout>
    );
}
