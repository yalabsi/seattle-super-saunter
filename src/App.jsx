import { HashRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BuildRoutePage from './pages/BuildRoutePage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import ConnectPage from './pages/ConnectPage';
import AboutSections from './components/AboutSections';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navbar />
          <RouterRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/route" element={<BuildRoutePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/connect" element={<ConnectPage />} />
          </RouterRoutes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 