import { useMutation } from 'react-query';
import { useStateValue } from '../providers/stateContext';

import * as jwt from 'jsonwebtoken';
import Auth from '../api/Auth';
export const useSignup = () => {
  const [{}, changeState] = useStateValue();
  return useMutation(Auth.signup, {
    onSuccess: (dt) => {
      localStorage.setItem('token', dt);
      const decoded = jwt.decode(dt);
      console.log({ dt });
      changeState({
        type: 'SET_USER',
        payload: decoded,
      });
    },
  });
};
