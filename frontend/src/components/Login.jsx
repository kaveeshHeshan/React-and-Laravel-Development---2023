import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import cookie from 'js-cookie';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectProfile, setRedirectProfile] = useState(false);
  const [errors, setErrors] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    axios.post("http://127.0.0.1:8000/api/auth/login", data)
      .then(res => {
        cookie.set('token', res.data.access_token);
        cookie.set('user', res.data.user);
        setRedirectProfile(true);
      })
      .catch(e =>
        // console.log(e.response.data)
        setErrors(e.response.data)

      );

  }

  if (redirectProfile) {
    console.log(redirectProfile);
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className='py-5 px-5'>
      <form className="form-signin" onSubmit={handleForm}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        {/* Error message view */}
        {errors.errors ? (<p className='alert alert-danger'>{errors.errors}</p>) : ("")}

        <input type="email" id="inputEmail" className="form-control m-2" placeholder="Email address" required autoFocus onChange={(e) => setEmail(e.target.value)} />
        <input type="password" id="inputPassword" className="form-control m-2" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p>Don't have an account ? <Link to="/register">Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
