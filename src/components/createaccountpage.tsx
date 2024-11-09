import React, { useState } from 'react';
import BoxContainer from './boxconteiner';

const CreateAccountPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <BoxContainer>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Create a New Account</h2>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          Fill in the details below to create your account.
        </p>

        {/* Email Input */}
        <label style={{ marginTop: '20px', marginBottom: '5px', fontSize: '14px' }}>Email Address</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={{
            padding: '10px',
            marginBottom: '10px',
            width: '100%',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />

        {/* Password Input */}
        <label style={{ marginBottom: '5px', fontSize: '14px' }}>Password</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter your password" 
            style={{
              padding: '10px',
              paddingRight: '40px',
              width: '100%',
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'black',
              cursor: 'pointer'
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Confirm Password Input */}
        <label style={{ marginBottom: '5px', marginTop: '15px', fontSize: '14px' }}>Confirm Password</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type={showConfirmPassword ? 'text' : 'password'} 
            placeholder="Confirm your password" 
            style={{
              padding: '10px',
              paddingRight: '40px',
              width: '100%',
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button 
            type="button" 
            onClick={toggleConfirmPasswordVisibility} 
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'black',
              cursor: 'pointer'
            }}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button 
          style={{
            marginTop: '20px',
            padding: '10px',
            width: '100%',
            backgroundColor: '#00bfff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Create Account
        </button>
      </BoxContainer>
    </div>
  );
};

export default CreateAccountPage;
