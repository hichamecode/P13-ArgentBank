
import './Profile.scss'
import Account from '../components/Account';
import Layout from '../components/Layout';

function Profile() {

      return (
            <Layout>
                  <main className="main bg-dark">
                        <div className="header-account">
                              <h1>Welcome back<br />Tony Jarvis!</h1>
                              <button className="edit-button">Edit Name</button>
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
                        description='Available Balance'/>
                        <Account 
                        title='Argent Bank Credit Card(x8349)'
                        amount={184.30}
                        description='Current Balance'/>
                  </main>
            </Layout>
      )




}

export default Profile;