import React from 'react'
import Navbar from './navbar'

const login = () => {
  return (
    <div>
    <Navbar />
    <div class="lg">
    <div class="login-container">
        <h1>Login/Signup</h1>
        <form id="login-form">
            <input type="text" id="username" placeholder="Username" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <div class="social-login">
            <button id="facebook-login">Login with Facebook</button>
            <button id="google-login">Login with Google</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default login