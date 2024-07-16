import React from 'react';

const MyButton = ({ onClick, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: disabled ? '#b0b0b0' : '#87CEFA', 
        color: '#fff', 
        border: 'none',
        borderRadius: '4px',
        margin:'20px',
        width:'200px',
        height:'70px'
      }}
    >
      {label}
    </button>
  );
};

export default MyButton;