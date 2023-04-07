import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import AxiosClient from '../AxiosClient';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
// import cookie from 'js-cookie';

const Login = () => {
    const { setCurrentUser, setUserToken } = useStateContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectProfile, setRedirectProfile] = useState(false);
    const [error, setError] = useState({});

    // const handleForm = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: email,
    //         password: password,
    //     }
    //     // axios.post("http://127.0.0.1:8000/api/auth/login", data)
    //     //     .then(res => {
    //     //         cookie.set('token', res.data.access_token);
    //     //         cookie.set('user', res.data.user);
    //     //         setRedirectProfile(true);
    //     //     })
    //     //     .catch(e =>
    //     //         // console.log(e.response.data)
    //     //         setErrors(e.response.data)

    //     //     );

    // }

    // if (redirectProfile) {
    //     console.log(redirectProfile);
    //     return <Navigate to="/dashboard" />;
    // }

    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = {
            email: email,
            password: password,
        }
        // axios.post("http://127.0.0.1:8000/api/auth/login", data)
        //     .then(res => {
        //         setCurrentUser(res.data.user)
        //         setUserToken(res.data.access_token)
        //         // console.log(res.data.access_token);
        //         // cookie.set('token', res.data.access_token);
        //         // cookie.set('user', res.data.user);
        //         // setRedirectProfile(true);
        //     })
        //     .catch(e =>
        //         // console.log(e.response.data)
        //         setError(e.response.data)

        //     );
        AxiosClient.post('auth/login', data)
            .then(res => {
                setCurrentUser(res.data.user)
                setUserToken(res.data.access_token)
                // console.log(res.data.access_token);
                // cookie.set('token', res.data.access_token);
                // cookie.set('user', res.data.user);
                // setRedirectProfile(true);
            })
            .catch(e =>
                // console.log(e.response.data)
                setError(e.response.data)

            );

    }

    return (
        <div className='py-5 px-5'>
            <form className="form-signin" onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                {/* Error message view */}
                {error.errors ? (<p className='alert alert-danger'>{error.errors}</p>) : ("")}

                <input type="email" id="inputEmail" className="form-control m-2" placeholder="Email address" autoFocus onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="inputPassword" className="form-control m-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p>Don't have an account ? <Link to="/signup">Signup</Link></p>
            </form>
        </div>
    )
}

export default Login
