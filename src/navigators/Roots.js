import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import { useStateValue } from '../providers/stateContext';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import UserPost from '../pages/UserPost';
import { useState } from 'react';

const Roots = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className='App'>
      <>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<Home />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/post/userspost' element={<UserPost />} />
        </Routes>
      </>
    </div>
  );
};
export default Roots;
