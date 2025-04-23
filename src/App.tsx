import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import Navbar from './layout/navbar';
import Dashboard from './pages/dashboard';
import Insights from './pages/insights';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
