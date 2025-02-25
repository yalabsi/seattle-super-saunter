import { Box } from '@mui/material';
import BuildRoute from '../components/BuildRoute';
import Footer from '../components/Footer';

function BuildRoutePage() {
  return (
    <Box sx={{ pt: 8 }}> {/* Add padding-top to account for navbar */}
      <BuildRoute />
      <Footer />
    </Box>
  );
}

export default BuildRoutePage; 