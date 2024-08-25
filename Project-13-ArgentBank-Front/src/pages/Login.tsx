import './Login.scss'
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';



function Login() {

      const navigate = useNavigate();
      const handleSub = (e: React.FormEvent) => {
            e.preventDefault();
            navigate('/login/profile');
      }

      type FormFields = {
            email: string;
            password: string;
      }

      const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
      const onSubmit: SubmitHandler<FormFields> = data => console.log(data);


      return (
            <Layout>

                  <main className="main bg-dark">
                        <section className="sign-in-content">
                              <i className="fa fa-user-circle sign-in-icon"></i>
                              <h1 className='sign-in-title'>Sign In</h1>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-wrapper">
                                          <label htmlFor="username" >Username</label>
                                          <input {...register("email", {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                                          })} type="text" id="username" />
                                          {errors.email && <span className='error-text'>the username has an invalid format</span>}
                                    </div>
                                    <div className="input-wrapper">
                                          <label htmlFor="password">Password</label
                                          ><input {...register("password", {
                                                required: true,
                                                minLength: 6
                                          })}  type="password" id="password" />
                                          {errors.password && <span className='error-text'>the password must have at least 6 characters</span>}
                                    </div>
                                    <div className="input-remember">
                                          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                                          >Remember me</label>
                                    </div>
                                    <button type='submit' className="sign-in-button">Sign In</button>
                              </form>
                        </section>

                  </main>
            </Layout>

      )
}


export default Login;