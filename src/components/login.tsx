

import React from 'react';
import Button from '../components/Button'; 
import './Login.css';

const Login: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      
      <div style={{ marginBottom: '15px' }}>
        <h1 className="title">Login </h1>
      </div>
      
      <input 
        type="text" 
        placeholder="Username" 
        style={{ padding: '10px', marginBottom: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        style={{ padding: '10px', marginBottom: '20px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} 
      />

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button label="Login" onClick={() => alert('Login')} />    
        <Button label="Sign In" onClick={() => alert('Sign In')} /> 
      </div>
    </div>
  );
};

export default Login;
