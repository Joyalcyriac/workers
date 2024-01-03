import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  return (
    <div className="background">
      <div className="blur-box">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" /><br></br>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
