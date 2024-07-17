import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <h1>Signup</h1>

      <div className="usercontainer">
        <label>Username</label>
        <input type="text" id="Uname" placeholder="Enter Username" name="username" required />
      </div>

      <div className="passcontainer">
        <label>Password</label>
        <input type="password" id="Pass" placeholder="Enter Password" name="password" required />
      </div>

      <button type="submit" id="signup">Signup</button>
    </div>
  );
};

export default Signup;
