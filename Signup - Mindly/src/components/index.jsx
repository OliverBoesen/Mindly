// src/components/SignUp.js
import React from 'react';
import '../styles/SignUp.css'; // Make sure the path is correct based on your folder structure

const SignUp = () => {
  return (
    <div>
      <div className="signup-overskrift">
        <h1>Sign Up</h1>
        <p>You’re now one step closer <br /> to becoming a Mindly</p>
      </div>
      
      <div className="signup-container">
        <div className="signup-email">
          <h3>Email</h3>
          <input type="text" placeholder="Enter your Email" />
        </div>

        <div className="signup-password">
          <h3>Password</h3>
          <input type="password" placeholder="Enter your Password" />
        </div>

        <div className="signup-confirm-password">
          <h3>Confirm Password</h3>
          <input type="password" placeholder="Confirm your Password" />
        </div>

        <div className="signup-call-you">
          <h3>What should we call you?</h3>
          <input type="text" placeholder="Enter your username" />
        </div>
      </div>
      
      <div className="signup-streg">
        <img src="/SignUp.png" alt="Sign Up Thumbnail" />
      </div>
      
      <div className="signup-button">
        <button>
          <p>Sign Up</p>
        </button>
      </div>

      <div className="signup-already-acc">
        <p>Already have an account? Log in <a href="#">here</a></p>
      </div>
    </div>
  );
};

export default SignUp;
