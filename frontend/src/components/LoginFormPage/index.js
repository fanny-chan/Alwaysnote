import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
  <div id="container"className="wrapper">
    <div className="form-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Alwaysnote</h1>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
           </ul>
          <br/>
          <p>Remember everything important.</p>
          <br/>

          <div id="demo-user"></div>

          <div className="seperator">
            <div class="or">or</div>
          </div>

          <label>
            <input class="email-input" placeholder="Username or Email"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            <input class="password-input" placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="submit" type="submit">Sign In</button>
        </form>

      </div>

    </div>
  </div>
  );
}

export default LoginFormPage;