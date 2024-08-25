import './Login.scss'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Login() {

      return (
            <Layout>

                  <main className="main bg-dark">
                        <section className="sign-in-content">
                              <i className="fa fa-user-circle sign-in-icon"></i>
                              <h1 className='sign-in-title'>Sign In</h1>
                              <form>
                                    <div className="input-wrapper">
                                          <label htmlFor="username">Username</label
                                          ><input type="text" id="username" />
                                    </div>
                                    <div className="input-wrapper">
                                          <label htmlFor="password">Password</label
                                          ><input type="password" id="password" />
                                    </div>
                                    <div className="input-remember">
                                          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                                          >Remember me</label
                                          >
                                    </div>
                                    <Link to="./profile" className="sign-in-button">Sign In</Link>
                              </form>
                        </section>

                  </main>
            </Layout>

      )
}



export default Login;