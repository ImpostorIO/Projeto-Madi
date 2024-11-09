import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxContainer from './boxconteiner'; // Importando o BoxContainer reutilizável
import './Login.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginBottom: '15px' }}>
        <h1 className="title">Login</h1>
      </div>

      <BoxContainer> {/* Substituímos a div de estilo manual pelo BoxContainer */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sign in to account</h2>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>Enter your email & password to login</p>

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

        <button 
          onClick={handleSignIn}
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
          Sign In
        </button>

        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: 'white' }}>Don't have an account? </span>
          <a 
            href="/create-account"
            style={{ color: '#00bfff', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Create Account
          </a>
        </div>
      </BoxContainer>
    </div>
  );
};

export default Login;
