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
    <div className=' grid h-screen place-items-center grid-cols-1'>
      {user !== null ? (
        <Navigate to='/post' replace={true} />
      ) : (
        <Navigate to='/login' replace={true} />
      )}
      <div className='bg-gray-200 place-content-center  grid  gap-8 p-20 rounded-2xl shadow-md drop-shadow-md '>
        <input
          className='input '
          type='text'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=' input'
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' onClick={handleLogin}>
          Log in
        </button>

        <Link to={'/signup'} className='btn'>
          signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
//comment
