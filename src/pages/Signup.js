import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useSignup();
  const handleSignup = (e) => {
    e.preventDefault();
    mutate({
      email,
      password,
      name,
      age,
    });
  };
  return (
    <>
      <h1>sign up </h1>
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
      <input
        type='text'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
      <input placeholder='age' onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSignup}>Log in</button>
    </>
  );
};

export default Signup;
