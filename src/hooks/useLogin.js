import React from 'react';
import { useStateValue } from '../providers/stateContext';
import { useMutation } from 'react-query';
import * as jwt from 'jsonwebtoken';
import Auth from '../api/Auth';
export const useLogin = () => {
  const [{}, changeState] = useStateValue();
  return useMutation(Auth.login, {
    onSuccess: (dt) => {
      localStorage.setItem('token', dt);
      const decoded = jwt.decode(dt);
      console.log(decoded);
      changeState({
        type: 'SET_USER',
        payload: decoded,
      });
    },
  });
};
