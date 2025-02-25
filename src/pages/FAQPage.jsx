import { Box } from '@mui/material';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function FAQPage() {
  return (
    <Box sx={{ pt: 8 }}> {/* Add padding-top to account for navbar */}
      <FAQ />
      <Footer />
    </Box>
  );
}

export default FAQPage; 