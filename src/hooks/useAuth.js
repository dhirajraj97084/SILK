import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
  const localtoken = localStorage.getItem('auth_tocken');
  const [isAuthenticated, setIsAuthenticated] = useState(localtoken?true:false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localtoken);

  const userLogin  = useCallback(() => {
    //console.log(localtoken, "auth")
    if (localtoken) {
      setIsAuthenticated(true)
      setToken(localtoken)
      //console.log(isAuthenticated)
    }
  }, [isAuthenticated,token, loading]);
  const userLogout = useCallback(()=>{
    localStorage.removeItem('auth_tocken')
    setIsAuthenticated(false)
    setToken(null)
  },[isAuthenticated,token])

  return { isAuthenticated, setIsAuthenticated, token, loading, setLoading, userLogin, userLogout };
};

export default useAuth;