import React, { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    if(password!==confirmPassword){
      alert('Passwords do not match')
      return;
    }

    localStorage.setItem('First name', firstName)
    localStorage.setItem('Last name', lastName)
    localStorage.setItem('Email', email)
    localStorage.setItem('Phone', phone)
    localStorage.setItem('Password', password)

    console.log(firstName, lastName, email, phone, password, confirmPassword)
    // console.log(localStorage.getItem("Email"))
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="signupDialog">
        <h1 className="signupText">Sign Up</h1>
        <div className="signupName">
          <label className="firstNameLabel">First Name :</label>
          <input
            className="firstNameInput"
            type={"text"}
            required
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="lastNameLabel">Last Name :</label>
          <input
            className="lastNameInput"
            type={"text"}
            required
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="signupEmailPhone">
          <label className="signupEmailLabel">Email :</label>
          <input
            className="signupEmailInput"
            type={"email"}
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="phoneLabel">Phone :</label>
          <input
            className="phoneInput"
            type={"number"}
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            minLength={9}
            maxLength={10}
          />
        </div>
        <div className="signupPassword">
          <label className="signupPasswordLabel">Password :</label>
          <input
            className="signupPasswordInput"
            type={"password"}
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={7}
          />
          <label className="confirmPasswordLabel">Confirm Password :</label>
          <input
            className="confirmPasswordInput"
            type={"password"}
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={7}
          />
        </div>
        <div className="signupButton">
          <button className="btn btn-primary btn-signup">Sign Up</button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
