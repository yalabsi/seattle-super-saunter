import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Why() {
  const reasons = [
    {
      title: "Fun",
      icon: <CelebrationIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
      content: "The very first and most important reason you should take part in the Seattle Super Saunter is that it will be loads of fun. Sure maybe not everyone's definition of fun is not walking 20 miles, but think of it: Spring in full swing, you are exploring the city on foot either solo or with friends, unhurried you stumble onto a cute coffee shop, a scenic overlook or a Norwegian Constitution day parade. Then post walk you get to revel with others and share your experience. Sounds like a blast and a half.",
      bgColor: 'rgba(255, 152, 0, 0.05)',
      borderColor: '#FF9800'
    },
    {
      title: "Perspective",
      icon: <ExploreIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      content: "Most people see the world from out their window. They go from their home, to their car, to work all the while missing out on what surrounds them. For some that's the point, but the point of this walk is for folks to see Seattle in a different light. You will be engaging with your city with your feet firmly on the ground. You will see a Seattle you may have otherwise missed. There will be joys and pleasant surprises, but also the ugly truths of our home that you won't simply be able to drive past. Ideally you will leave the Saunter with more questions than answers, further inspiring you to explore this wonderful hot mess of a city.",
      bgColor: 'rgba(33, 150, 243, 0.05)',
      borderColor: '#2196F3'
    },
    {
      title: "Community",
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      content: "You could very easily go and walk the length by your lonesome on your own time, and if you can't make it on May 17th I highly encourage you to. However, what will make the saunter special is the opportunity to share an experience with others. Many folks walk and urban hike in Seattle, though often in isolation. If folks want to walk at their own pace by themselves, the saunter allows for that. But this can be a very lonely city and there are never enough opportunities (especially free opportunities) to form connections with others. Whether that is strengthening bonds with the folks you walk with, meeting fellow saunterers at the celebration afterwards, or even through striking up conversation with someone selling you a bahn mi, the Seattle Saunter is a great way to find and form community. What you may come to realize is that Seattle is much more the people who live here instead of the rain, the space needle, and the stunning views.",
      bgColor: 'rgba(76, 175, 80, 0.05)',
      borderColor: '#4CAF50'
    },
    {
      title: "The Bit",
      icon: <DirectionsWalkIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      content: "You will always be able to tell people that you have walked the entire length of Seattle!",
      bgColor: 'rgba(156, 39, 176, 0.05)',
      borderColor: '#9C27B0'
    }
  ];

  return (
    <Box 
      id="why"
      sx={{ 
        py: 8,
        background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/images/seattle-neighborhood.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          color="primary" 
          align="center" 
          gutterBottom
          sx={{ 
            mb: 6,
            fontWeight: 700
          }}
        >
          Why should I walk the entire length of Seattle?
        </Typography>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: reason.bgColor,
                  border: '2px solid',
                  borderColor: reason.borderColor
                }}
              >
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  {reason.icon}
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    sx={{ 
                      ml: 2,
                      fontWeight: 600,
                      color: reason.borderColor
                    }}
                  >
                    {reason.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mt: 2
                  }}
                >
                  {reason.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Why; 