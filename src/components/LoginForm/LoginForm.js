import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    // const userLoginEmail = localStorage.getItem("Email")
    console.log(email)
    // console.log(userLoginEmail)
    console.log(password)
    
  }

  return (
    <form>
      <div className="loginDialog">
        <h1 className="Logintext">Login</h1>
        <div className="loginEmail mx-4 pt-4">
          <label className="loginEmailLabel">Email :</label>
          <input
            className="loginEmailInput"
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="loginPassword mx-4 py-4">
          <label className="loginPasswordLabel">Password :</label>
          <input
            className="loginPasswordInput"
            type="password"
            required
            minLength={"7"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="loginButton">
          <button className="btn btn-primary btn-login" onClick={handleSubmit}>Login</button>
        </div>
        <p className="createAccountText">
          Don't have an account yet? <Link to={"/signup"}> Create one </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
