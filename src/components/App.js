import React, { useEffect, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register/Register';
import Login from './Login/Login';
import MainPage from './MainPage/MainPage';

function App() {

  return (
    <div className="page">
      <MainPage />
    </div>
  )
}

export default App;
