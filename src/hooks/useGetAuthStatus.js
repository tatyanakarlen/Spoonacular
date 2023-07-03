import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useGetAuthStatus = () => {
  const [authStatus, setAuthStatus] = useState('LOADING');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus('AUTHENTICATED');
      } else {
        setAuthStatus('UNAUTHENTICATED');
      }
    });

    // Cleanup function to unsubscribe from onAuthStateChanged when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return { authStatus };
};
