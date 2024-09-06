


import './Login.scss';
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


function Login() {

  const navigate = useNavigate();

  // Schéma de validation Zod
  const schema = z.object({
    email: z.string().email({ message: 'The email format is invalid' }),
    password: z.string().min(8, { message: 'The password must be at least 8 characters long' })
  });

  type FormFields = z.infer<typeof schema> & { generalError?: string }

  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });



      if (response.ok) {
        const responseData = await response.json()
        const token = responseData.body.token;
        console.log(token, 'this is token')

        navigate('/login/profile');
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setError('generalError', {
          type: 'manual',
          message: errorData.message
        });
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('generalError', {
        type: 'manual',
        message: 'An error occurred. Please try again later.'
      });
    }
  }

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
            <button disabled={isSubmitting} type='submit' className="sign-in-button">
              {isSubmitting ? "Loading ..." : "Sign In"}
            </button>
          </form>
          {errors.generalError && <span className='error-text'>{errors.generalError.message}</span>}
        </section>
      </main>
    </Layout>
  );
}

export default Login;



