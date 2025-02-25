import { Box, Typography, Container, Paper } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

function Routes() {
  return (
    <Box 
      id="routes"
      sx={{ 
        py: 8,
        background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/images/seattle-streets.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Container maxWidth="lg">
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
          What is the Seattle Super Saunter?
        </Typography>

        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            bgcolor: 'rgba(33, 150, 243, 0.05)',
            borderRadius: 4,
            border: '2px solid',
            borderColor: '#2196F3',
            margin: '0 auto'
          }}
        >
          <Box 
            sx={{ 
              display: 'inline-flex',
              alignItems: 'center',
              mb: 2
            }}
          >
            <DirectionsWalkIcon sx={{ fontSize: 40, color: '#2196F3' }} />
          </Box>

          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 4,
              color: 'text.secondary'
            }}
          >
            The Seattle Super Saunter is a self-guided roughly 20-mile adventure from the city's northernmost point (the shoreline South/148th street light rail) to the southernmost point (Garden of Gethsemane Church of God in Christ).
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary'
            }}
          >
            The Seattle Super Saunter is not a race and is not intended to group walk in unison. It is an opportunity to see your city by foot, be it by yourself with friends, or maybe even someone you meet at the start. There will be a meetup afterward for folks to celebrate, mingle, and form community.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Routes; 