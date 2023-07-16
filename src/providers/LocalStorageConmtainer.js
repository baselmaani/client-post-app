import React, { useEffect } from 'react';
import { useStateValue } from './stateContext';
import * as jwt from 'jsonwebtoken';
const LocalStorageConmtainer = ({ children }) => {
  const [{}, changeState] = useStateValue();

  useEffect(() => {
    const getToken = async () => {
      const tkn = localStorage.getItem('token');
      if (tkn && tkn !== null) {
        const decoded = jwt.decode(tkn);
        changeState({
          type: 'SET_USER',
          payload: decoded,
        });
      }
    };
    getToken();
  }, []);
  return <>{children}</>;
};

export default LocalStorageConmtainer;
