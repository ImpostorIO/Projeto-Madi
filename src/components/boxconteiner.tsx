import React from 'react';

interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '30px',
      borderRadius: '12px',
      textAlign: 'left',
      marginTop: '70px',
      width: '400px',
      minHeight: '450px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Adicionando a sombra
    }}>
      {children}
    </div>
  );
};

export default BoxContainer;
