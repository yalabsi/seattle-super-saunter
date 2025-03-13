import { Box, Typography, Button, Container } from '@mui/material';

function Hero() {
  const handleScrollToSignUp = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        className="hero"
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          backgroundPosition: { xs: '30% center', md: 'center center' },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" sx={{ 
            fontSize: { xs: '3rem', md: '4rem' },
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            mb: 2
          }}>
            The Seattle Super Saunter
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
          Seattle's Premier long-distance trekking event
          </Typography>
          <Typography variant="h6" className="event-date" sx={{ mb: 4 }}>
            Join us on May 17th, 2025
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleScrollToSignUp}
            size="large"
            sx={{
              bgcolor: 'var(--accent-color)',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: '#B69268',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Hero; 