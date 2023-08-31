import React, { useState } from 'react';
import '../WGstyling.css';
import NatureNavbar from './Navbar';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., send data to a server, check credentials)
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
    <NatureNavbar/>
    <div className="login-container">
        
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className = "login-button" type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default  UserLogin;
