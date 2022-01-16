import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import FormPage from './pages/form';
import LoginPage from './pages/login';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/h" element={<HomePage />} />
          <Route path="/form/:id" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
