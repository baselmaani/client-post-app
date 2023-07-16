import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import { useStateValue } from '../providers/stateContext';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import UserPost from '../pages/UserPost';
import { useState } from 'react';

const Roots = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedin(true);
  };
  return (
    <div className='App'>
      <>
        <Routes>
          <Route path='/post' element={<Home />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/post/userspost' element={<UserPost />} />
        </Routes>
        <button onClick={logout}>Log Out</button>
      </>
    </div>
  );
};
export default Roots;
