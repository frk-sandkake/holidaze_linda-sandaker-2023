import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser } from '../redux/authSlice';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export type LoginFormInputs = {
  [x: string]: any;
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } }
  = useForm<LoginFormInputs>({ mode: "onChange"
  });
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { error, status } = useAppSelector(state => state.auth);
  const location = useLocation()
  const navigate = useNavigate()


  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(loginUser(data));
      if (status === "idle") {
        const token = data.accessToken;
        localStorage.setItem("auth", token as string);
        navigate('/profile');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {
        location.state?.message &&
        <h3 className="login-error">{location.state.message}</h3>
      }
      <Form onSubmit={handleSubmit(onSubmit)}
        className='d-flex flex-column gap-4'
        >
        <Form.Floating className="mb-3">
          <Form.Control
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required"
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Only Noroff email domains allowed"
              }
            })}
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
          {errors?.email && <span role="alert">{errors.email.message}</span>}
        </Form.Floating>
        <Form.Floating>
          <Form.Control
          {...register("password", {
            required: {
              value: true,
              message: "This field is required"
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
            })}
            id="password"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
          {errors.password && <span role="alert">{errors.password.message}</span>}
        </Form.Floating>
        {error && <p>{error}</p>}
        <Button type="submit" variant="primary" disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</Button>
      </Form>
    </>
  );
};

export default LoginForm;
