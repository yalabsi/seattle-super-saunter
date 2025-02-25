import { Box, Typography, Button, Container, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Hero() {
  const reasons = [
    {
      title: "Fun",
      icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "The very first and most important reason you should take part in the Seattle Super Saunter is that it will be loads of fun. Sure maybe not everyone's definition of fun is not walking 20 miles, but think of it: Spring in full swing, you are exploring the city on foot either solo or with friends, unhurried you stumble onto a cute coffee shop, a scenic overlook or a Norwegian Constitution day parade. Then post walk you get to revel with others and share your experience. Sounds like a blast and a half."
    },
    {
      title: "Perspective",
      icon: <RemoveRedEyeIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "Most people see the world from out their window. They go from their home, to their car, to work all the while missing out on what surrounds them. For some that's the point, but the point of this walk is for folks to see Seattle in a different light. You will be engaging with your city with your feet firmly on the ground. You will see a Seattle you may have otherwise missed. There will be joys and pleasant surprises, but also the ugly truths of our home that you won't simply be able to drive past. Ideally you will leave the Saunter with more questions than answers, further inspiring you to explore this wonderful hot mess of a city."
    },
    {
      title: "Community",
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "You could very easily go and walk the length by your lonesome on your own time, and if you can't make it on May 17th I highly encourage you to. However, what will make the saunter special is the opportunity to share an experience with others. Many folks walk and urban hike in Seattle, though often in isolation. If folks want to walk at their own pace by themselves, the saunter allows for that. But this can be a very lonely city and there are never enough opportunities (especially free opportunities) to form connections with others. Whether that is strengthening bonds with the folks you walk with, meeting fellow saunterers at the celebration afterwards, or even through striking up conversation with someone selling you a bahn mi, the Seattle Saunter is a great way to find and form community. What you may come to realize is that Seattle is much more the people who live here instead of the rain, the space needle, and the stunning views."
    },
    {
      title: "The Bit",
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "You will always be able to tell people that you have walked the entire length of Seattle!"
    }
  ];

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
          Seattle’s Premier long-distance walking event
          </Typography>
          <Typography variant="h6" className="event-date" sx={{ mb: 4 }}>
            Join us on May 17th, 2025
          </Typography>
          <Button 
            variant="contained" 
            href="#landmarks"
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