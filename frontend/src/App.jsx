import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Update import
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CuisinePage from './pages/CuisinePage';
import MenusPage from './pages/MenusPage';
import ReservationsPage from './pages/ReservationsPage';
import PrivateDiningPage from './pages/PrivateDiningPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>  {/* Update Switch to Routes */}
          <Route path="/" element={<HomePage />} />  {/* Update Route configuration */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cuisine" element={<CuisinePage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/private-dining" element={<PrivateDiningPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
