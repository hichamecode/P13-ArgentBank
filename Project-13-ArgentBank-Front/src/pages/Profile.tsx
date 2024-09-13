
import './Profile.scss'
import Account from '../components/Account';
import Layout from '../components/Layout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from '../global-state/authSlice';
import { useSelector } from 'react-redux';

function Profile() {

      const dispatch = useDispatch()
      const [isModalOpen, setIsModalOpen] = useState(false)
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')

      const handleOpenModal = () => {
            setIsModalOpen(true)
      }

      const handleCloseModal = () => {
            setIsModalOpen(false)
      }

      const handleChangeName = (event) => {
            event.preventDefault()
            dispatch(updateName({ firstName, lastName }))
                  .then(() => {
                        setIsModalOpen(false);
                  })
                  .catch(error => {
                        console.error("Failed to update name:", error);
                  });

      }

      const newFirstName = useSelector((state) => state.auth.firstName)
      const newLastName = useSelector((state) => state.auth.lastName)

      return (
            <Layout>
                  <main className="main bg-dark">
                        <div className="header-account">
                              <h1>Welcome back<br />{newFirstName === '' ? <span>Dear</span>: <span>{newFirstName}</span> } {newLastName === '' ? <span>User</span> : <span>{newLastName}</span>}</h1>
                              <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
                        </div>
                        <h2 className="sr-only">Accounts</h2>
                        <Account
                              title='Argent Bank Checking (x8349)'
                              amount={2082.79}
                              description='Available Balance'
                        />
                        <Account
                              title='Argent Bank Savings (x6712)'
                              amount={10928.42}
                              description='Available Balance' />
                        <Account
                              title='Argent Bank Credit Card(x8349)'
                              amount={184.30}
                              description='Current Balance' />
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
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
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
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
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
      )




}

export default Profile;