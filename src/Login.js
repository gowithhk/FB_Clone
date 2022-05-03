import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Sign In..
        auth.signInWithPopup(provider).then(result => {

          dispatch({
            
          })



            console.log(result);
        }).catch((error) => alert(error.message));

    };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;