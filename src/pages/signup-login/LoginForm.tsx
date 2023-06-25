import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userLogin } from '../../redux/authSlice';
import { Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
// import { AuthUser } from '../redux/types';

export type LoginFormInputs = {
  [x: string]: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } }
  = useForm<LoginFormInputs>({ mode: "onChange",
  defaultValues: {
    email: "",
    password: "",
  }
  });

  const dispatch = useAppDispatch();
  const { error, status } = useAppSelector(state => state.auth);
  const location = useLocation()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const from = location.state?.from || "/profile";

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (status === "failed") {
    console.log("failed", error)
    return <div className="text-center mt-5">{error}</div>;
  }

  const handleLogin = (data: LoginFormInputs) => {
    dispatch(userLogin(data.email, data.password))
    if (status === 'idle') {
      navigate(from, { replace: true })
    }
  }

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    handleLogin(data)
  };

  return (
    <>
      {
        location.state?.message &&
        <h3>{location.state.message}</h3>
      }
      {
        error &&
        <h3>{error}</h3>
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
        <Button type="submit" variant="primary"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting"
              ? "Logging in..."
              : "Log in"
          }
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
