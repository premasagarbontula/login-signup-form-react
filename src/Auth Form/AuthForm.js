import React, { useState } from "react";
import "./AuthForm.css";

export default function AuthForm() {
  const [isLogin, setLogin] = useState(true);

  const loginForm = () => {
    return (
      <form className="form">
        <h1>Login Form</h1>
        <input type="email" placeholder="Your Email Address" />
        <input type="password" placeholder="Your Password" />
        <a href="/#">Forgot Password?</a>
        <button>Login</button>
        <p>
          Not a member?{" "}
          <a href="/#" onClick={() => setLogin(false)}>
            Signup now
          </a>
        </p>
      </form>
    );
  };

  const signupForm = () => {
    return (
      <form className="form">
        <h1>Signup Form</h1>
        <input type="email" placeholder="Your Email Address" />
        <input type="password" placeholder="Your Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Signup</button>
      </form>
    );
  };
  return (
    <div className="container">
      <div className="form-container">
        <div className="toggle-container">
          <button
            className={isLogin && "active"}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin && "active"}
            onClick={() => setLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? loginForm() : signupForm()}
      </div>
    </div>
  );
}
