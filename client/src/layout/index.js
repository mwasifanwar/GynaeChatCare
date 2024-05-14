import React from 'react';
import logo from '../assets/logo.png';

const AuthLayouts = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#FFE0E6', minHeight: '100vh' }}>
      <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
        <img
          src={logo}
          alt='logo'
          style={{ width: '12%', height: 'auto' }} 
        />
      </header>
      {children}
    </div>
  );
};

export default AuthLayouts;

