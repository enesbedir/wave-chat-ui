import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;