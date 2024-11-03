import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import  setUser  from '../signup/SignUpForm';
import './SignUpForm.css';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setUser(data));
    alert('Account created successfully!');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <h2>Signup</h2>
        <label>
          Username
          <input
            {...register('username', { required: 'Username is required' })}
            type="text" placeholder='Username'
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </label>

        <label>
          Email
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            type="email" placeholder='Email'
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>

        <label>
          Create Password
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type="password" placeholder='Create Password'
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </label>

        <p>
          By creating an account, I agree to <a href="#terms">Terms and Conditions</a>
        </p>

        <button type="submit" className="create-account-btn">Create Account</button>
        <p className="login-link">
          Already have an account? <a href="#login">Login</a>
        </p>
        <p className="help-link">
          Need help? <a href="#help">Click here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;