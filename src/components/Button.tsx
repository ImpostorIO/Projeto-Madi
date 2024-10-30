import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-32 py-2 bg-purple-500 text-white rounded hover:bg-purple-950 transition duration-500 border border-black font-roboto"
    >
      {label}
    </button>
  );
};

export default Button;
