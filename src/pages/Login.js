import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useStateValue } from '../providers/stateContext';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useLogin();
  const handleLogin = (e) => {
    e.preventDefault();

    mutate({
      email,
      password,
    });
  };
  const [{ user }] = useStateValue();

  return (
    <>
      <h1>Log in </h1>
      {user !== null ? (
        <Navigate to='/post' replace={true} />
      ) : (
        <Navigate to='/login' replace={true} />
      )}
      <input
        type='text'
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log in</button>

      <Link to={'/signup'}>signup</Link>
    </>
  );
};

export default Login;
