import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import VerificationPage from './VerificationPage';
import SettingsPage from './SettingsPage';
import HomePage from './HomePage';
import SubmitIssuePage from './SubmitIssuePage';
import SolutionsPage from './SolutionsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/submit-issue" element={<SubmitIssuePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
