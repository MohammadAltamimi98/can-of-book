import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  // import './Login.css';
  import { useAuth0 } from "@auth0/auth0-react";


  function loginButton(){
    
    const {
      isAuthenticated,
      loginWithRedirect,
    } = useAuth0;

    return ! isAuthenticated && (
      <button onClick={loginWithRedirect}>Log in</button>

    )
}


export default loginButton;






