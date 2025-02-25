import { Box, Container, Typography } from '@mui/material';
import Footer from '../components/Footer';

function ConnectPage() {
  return (
    <Box sx={{ pt: 8 }}> {/* Add padding-top to account for navbar */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            mb: 6,
            fontWeight: 600,
            color: '#1B4B66'
          }}
        >
          Connect
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: '1.1rem',
            color: '#333',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          If you would like to get into contact with us please feel free to send us an email at{' '}
          <a href="mailto:holden@seattlesupersaunter.com" style={{ color: '#1B4B66', textDecoration: 'none' }}>
            holden@seattlesupersaunter.com
          </a>
        </Typography>
        {/* Content will go here */}
      </Container>
      <Footer />
    </Box>
  );
}

export default ConnectPage; 