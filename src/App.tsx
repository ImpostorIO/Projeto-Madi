import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';
import CreateAccountPage from  './components/createaccountpage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
    </Routes>
  );
};

export default App;