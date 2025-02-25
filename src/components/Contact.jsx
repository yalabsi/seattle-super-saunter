import { Box, Typography, Container, Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Contact() {
  return (
    <Box 
      id="connect"
      sx={{ 
        py: 8, 
        background: 'linear-gradient(180deg, var(--light-color) 0%, #FFFFFF 100%)'
      }}
    >
      <Container maxWidth="md">
        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" component="h3" color="primary" gutterBottom>
            Ready to Join the Adventure?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Sign up now for The Seattle Super Saunter 2025
          </Typography>
          <Button
            variant="contained"
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<HowToRegIcon />}
            size="large"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              px: 6,
              py: 2,
              borderRadius: '50px',
              fontSize: '1.2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease',
              width: { xs: '90%', sm: 'auto' }
            }}
          >
            Sign Up Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact; 