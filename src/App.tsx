import { Box, useTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import Navbar from './layout/navbar';
import Dashboard from './pages/dashboard';
import Insights from './pages/insights';
import Footer from './layout/footer';

function App() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />
        <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </Box>        
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
