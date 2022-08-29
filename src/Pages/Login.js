import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { auth } from '../firebase'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // this stops the refreshing!!
        // do the login logic...

        auth.signInWithEmailAndPassword(email, password)
        .then ((auth) => {
            //logged in, redirect to homepage
            navigate('/')
        })
        .catch(e => alert(e.message))
    }

    const register = event => {
        event.preventDefault(); // this stops the refreshing!!
        // do the register logic...

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect to homepage..
            navigate('/')
        })
        .catch(e => alert(e.message))

    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <button onClick={login} type="submit" className='login_signInButton'>Sign in</button>
            </form>
            <p>By signin-in you agree to Amazon's Conditions of Use & Sale. Please see our privacy Notice, our Cookies notice and our interest-based Ads notice.</p>
            <button onClick={register} className="login_register">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;