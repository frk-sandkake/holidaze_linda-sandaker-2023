import { Form, Button } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../redux/authSlice';

export type SignupFormInputs = {
  [x: string]: any;
  name: string;
  email: string;
  password: string;
  avatar?: string | null;
  venueManager?: boolean;
};

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } }
  = useForm<SignupFormInputs>({
    mode: "onChange"
  });
  const [isLoading, setIsLoading] = useState(false);
  const { status, error } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(registerUser(data));
      if (status === "idle") {

        navigate('/login');
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}
      className='d-flex flex-column gap-4'>
      <Form.Floating>
        <Form.Control
        {...register("name", {
          required: {
            value: true,
            message: "This field is required"
          },
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long"
          },
          pattern: {
            value: /^[a-zA-Z0-9_]*$/i,
            message: "Only letters, numbers, and underscores are allowed"
          }
        })} id="name" type="text" placeholder='' />
        <label htmlFor="name">Name</label>
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </Form.Floating>
      <Form.Floating>
        <Form.Control
        {...register("email", {
          required: {
            value: true,
            message: "This field is required"
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Only Noroff email domains allowed"
          }
        })} id="email" type="email" placeholder=''
        />
        <label htmlFor="email">Email</label>
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </Form.Floating>
      <Form.Floating >
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
        })} id="password" type="password" placeholder=''
        />
        <label htmlFor="password">Password</label>
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </Form.Floating>
      <Form.Floating>
        <Form.Control
        {...register("avatar", {
          pattern: {
            value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            message: "Invalid URL format"
          }
        })} id="avatar" type="text" placeholder=''
        />
        <label htmlFor="avatar">Avatar</label>
        <Form.Text>
        {errors.avatar && <span role="alert">{errors?.avatar?.message}</span>}
        </Form.Text>
      </Form.Floating>
      <Form.Group controlId="venueManager">
        <Form.Check
        {...register("venueManager")}
        label="Are you a Venue Manager?" value={"true"}
        type="checkbox"
        />
      </Form.Group>
      {error && <p>{error}</p>}
      <Button type="submit" variant="primary"
        disabled={isLoading}>{isLoading ?
        'Loading...' : 'Sign Up'}
      </Button>
    </Form>
  );
};

export default SignupForm;
