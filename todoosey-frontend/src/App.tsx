import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";



function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    function toggleDarkTheme() {
        setIsDarkTheme(prevState => !prevState);
    }

  return (
    <div className="App" data-theme={isDarkTheme ? 'dark':'light'} >
        <NavBar isLoggedIn={true} toggleTheme={toggleDarkTheme} isDarkMode={isDarkTheme}  />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
