import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  // import './Login.css';
  import { useAuth0 } from "@auth0/auth0-react";


  const loginButton = () => {
    
    const {
    
      loginWithRedirect,
    } = useAuth0;

    return <button onClick={() => loginWithRedirect()}> Log in </button>


    
}


export default loginButton;






