import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={{
      width: '250px', // Largura da barra lateral
      height: '100vh', // Altura total da tela
      backgroundColor: '#007BFF', // Cor azul igual dos botões
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)', // Sombra leve
    }}>
      <h2>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
