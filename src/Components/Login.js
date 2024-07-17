import React from 'react'
import './Login.css';

//function Login() {
//     return <h1> Login </h1>
//}

export const Login = () =>


  <div class="container">
  <h1> Login </h1>


  <div class="usercontainer">
    <label>Username  </label>
                <input type="text" id="Uname" placeholder="Enter Username" name="username" required/>
  </div>

  <div class="passcontainer">
    <label>Password  </label>
                <input type="password" id="Pass" placeholder="Enter Password" name="password" required/>
  </div>

    <button type="submit" id="log">Login</button>

                <button type="button" class="cancelbtn"> Cancel</button>
              <a href="#"> Register </a>

    </div>


export default Login