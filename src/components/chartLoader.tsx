import { Box, CircularProgress } from '@mui/material';

const ChartLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
    <CircularProgress />
  </Box>
);

export default ChartLoader;
