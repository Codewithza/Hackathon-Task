// src/components/LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import styled from 'styled-components';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login());
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        
        <label>Username</label>
        <input 
          type="text" 
          placeholder="Username"
          {...register('username', { required: "Username is required" })}
        />
        {errors.username && <Error>{errors.username.message}</Error>}

        <label>Password</label>
        <input 
          type="password" 
          placeholder="Password"
          {...register('password', { required: "Password is required" })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        <ForgotPassword>Forgot password?</ForgotPassword>
        
        <button type="submit">Login</button>

        <SignupSection>
          Don't have an account? <a href="/signup">Signup</a>
        </SignupSection>
        <HelpLink>Need help?</HelpLink>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

// Styled Components
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  h2 {
    margin-bottom: 1em;
    font-weight: bold;
    color: #333;
    position: relative;
    padding-bottom: 0.5em;
    &:after {
      content: '';
      width: 40px;
      height: 2px;
      background: #8a2be2;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  label {
    display: block;
    margin: 10px 0 5px;
    font-size: 0.9em;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    &:focus {
      outline: none;
      border-color: #8a2be2;
    }
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 1em;
    color: #fff;
    background: linear-gradient(90deg, #8a2be2, #da70d6);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.8em;
  margin: -10px 0 10px;
`;

const ForgotPassword = styled.a`
  display: block;
  margin-bottom: 15px;
  font-size: 0.85em;
  color: #8a2be2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SignupSection = styled.div`
  margin-top: 15px;
  font-size: 0.85em;

  a {
    color: #8a2be2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HelpLink = styled.div`
  margin-top: 10px;
  font-size: 0.85em;
  color: #8a2be2;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
