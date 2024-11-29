import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";



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
      </Routes>
    </div>
  );
}

export default App;
