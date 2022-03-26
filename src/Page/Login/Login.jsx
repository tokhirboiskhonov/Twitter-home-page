import React from "react";
import './Login.scss';
import {Context} from '../../Context/Authentication'
import loginLogo from  '../../Assets/Image/twitter-login-page-logo.svg';

function Login() {

    const { setToken } = React.useContext(Context)

    const handleSubmit = evt =>{
        evt.preventDefault();

        const {user_email, user_password} = evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                email: user_email.value.trim(),
                password: user_password.value.trim(),
            })
        })
        .then(response => response.json())
        .then((data) => setToken(data?.token))
    }

    return(
        <form className="login__form" onSubmit={handleSubmit}>
            <img className="login__logo" src={loginLogo} alt="twitter-login" width={50} height={41} />
            <h1 className="login__title">Log in to Twitter</h1>
            <input
            className="login__input1"
            type="email"
            placeholder="Phone number, email address"
            defaultValue='eve.holt@reqres.in' name="user_email"/>

            <input
            className="login__input1"
            type="password"
            placeholder="Password"
            defaultValue='cityslicka' name="user_password"/>
        

            <button className="login__btn">Log In</button>

            <div className="login__box">
                <p className="login__text1">Forgot password?</p>
                <p className="login__text2">Sign up to Twitter</p>
            </div>
        </form>
    )
}

export default Login;