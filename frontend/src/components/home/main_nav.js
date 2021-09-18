import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './main_nav.css';
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import { useState } from "react";

function MainNav({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const demoUser = () => {
    setErrors([]);
    return dispatch(
      sessionActions.login({
        credential: "Demo-lition",
        password: "password",
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="splash-nav">
            <div className="splash-box">
                <div className="home-nav-logo">
                    <img className="alwaysnote-logo" src="https://evernote.com/img/logo/evernote/primary.svg">
                    </img>
                  <div className="splash-navbuttons">
                    <NavLink className="home-login-button" to="/login">Log In</NavLink>
                  <div className="splash-demo-user-button">
                    <button className="demo-user-link" type="submit" onClick={demoUser}>Demo User</button>
                  </div>
                  </div>
                </div>
            </div>
        </div>
      
      </>
    );
  }

  return (
    
      <div className="full-page">
        {isLoaded && sessionLinks}
      </div>
    
  );
}


      

export default MainNav;