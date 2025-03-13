import { Box, Typography, Container, Paper, Zoom } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react';

function AboutSections() {
  const reasons = [
    {
      title: "Fun",
      icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "The very first and most important reason you should take part in the Seattle Super Saunter is that it will be loads of fun. Sure maybe not everyone's definition of fun is walking 20 miles, but think of it: Spring in full swing, you are exploring the city on foot either solo or with friends, unhurried you stumble onto a cute coffee shop, a scenic overlook or a Norwegian Constitution day parade. Then post walk you get to revel with others and share your experience. Sounds like a blast and a half!",
      color: '#FF6B35',  // Vibrant orange
      bgColor: 'rgba(255, 107, 53, 0.05)'
    },
    {
      title: "Perspective",
      icon: <ExploreIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "Most people see the world from out their window. They go from their home, to their car, to work all the while missing out on what surrounds them. For some that's the point, but the point of this walk is for folks to see Seattle in a different light. You will be engaging with your city with your feet firmly on the ground. You will see a Seattle you may have otherwise missed. There will be joys and pleasant surprises, but also the ugly truths of our home that you won't simply be able to drive past. Ideally you will leave the Saunter with more questions than answers, further inspiring you to explore this wonderful hot mess of a city.",
      color: '#004E89',  // Deep blue
      bgColor: 'rgba(0, 78, 137, 0.05)'
    },
    {
      title: "Community",
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "You could very easily go and walk the length by your lonesome on your own time, and if you can't make it on May 17th I highly encourage you to. However, what will make the saunter special is the opportunity to share an experience with others. Many folks walk and urban hike in Seattle, though often in isolation. If folks want to walk at their own pace by themselves, the saunter allows for that. But this can be a very lonely city and there are never enough opportunities to form connections with others. Whether that is strengthening bonds with the folks you walk with, meeting fellow saunterers at the celebration afterwards, or even through striking up conversation with someone selling you a bahn mi, the Seattle Saunter is a great way to find and form community. What you may come to realize is that Seattle is much more the people instead of the rain, the space needle, and the stunning views.",
      color: '#2BAE66',  // Fresh green
      bgColor: 'rgba(43, 174, 102, 0.05)'
    },
    {
      title: "The Bit",
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#1B4B66' }} />,
      content: "You will always be able to tell people that you have walked the entire length of Seattle!",
      color: '#8A4FFF',  // Rich purple
      bgColor: 'rgba(138, 79, 255, 0.05)'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        {/* What is section */}
        <Zoom in={true} timeout={500}>
          <Box sx={{ pt: 12, pb: 6 }}>
            <Typography variant="h4" component="h2" sx={{ 
              mb: 6,
              fontWeight: 600,
              color: '#1B4B66',
              fontSize: { xs: '1.25rem', md: '2rem' },
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                backgroundColor: '#1B4B66',
                borderRadius: '2px'
              }
            }}>
              What is the Seattle Super Saunter?
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: { xs: 1.5, md: 4 },
                borderRadius: { xs: 3, md: 4 },
                backgroundColor: 'rgba(27, 75, 102, 0.05)',
                border: '2px solid',
                borderColor: '#1B4B66',
                width: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                mb: 2,
                flexWrap: 'wrap'
              }}>
                {React.cloneElement(<DirectionsWalkIcon />, { 
                  sx: { 
                    fontSize: 40, 
                    color: '#1B4B66',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)'
                    }
                  } 
                })}
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  lineHeight: 1.8, 
                  color: 'text.secondary', 
                  mt: 2,
                  mb: 3,
                  wordBreak: 'break-word'
                }}
              >
                The Seattle Super Saunter is a self-guided roughly 20-mile adventure from the city's northernmost point (the shoreline South/148th street light rail) to the southernmost point (Garden of Gethsemane Church of God in Christ).
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  lineHeight: 1.8, 
                  mt: 2,
                  mb: 3,
                  color: 'text.secondary', 
                  wordBreak: 'break-word'
                }}
              >
                Although the Seattle Super Saunter is intended to be walked, there is by no means a mandate to walk. You can run, you can hop on the bus, you can skateboard, you can pogo stick, or combine multiple modes of transportation. With the only exception of driving and riding a motorcycle, this is your adventure so traverse Seattle how you want.  
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  lineHeight: 1.8, 
                  color: 'text.secondary', 
                  wordBreak: 'break-word'
                }}
              >
                Additionally the Seattle Super Saunter is not a race and is not intended to be done in one massive group. It is an opportunity to see your city by foot, be it by yourself with friends, or maybe even someone you meet at the start. There will be a meetup afterward for folks to celebrate, mingle, and form community.
              </Typography>
            </Paper>
          </Box>
        </Zoom>

        {/* Why walk section */}
        <Box sx={{ pt: 6, pb: 12 }}>
          <Typography variant="h4" component="h2" sx={{ 
            mb: 6,
            fontWeight: 600,
            color: '#1B4B66',
            fontSize: { xs: '1.25rem', md: '2rem' },
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#1B4B66',
              borderRadius: '2px'
            }
          }}>
            Why should I walk the entire length of Seattle?
          </Typography>

          {reasons.map((reason, index) => (
            <Zoom in={true} timeout={500 + (index * 200)} key={index}>
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 1.5, md: 4 },
                    borderRadius: { xs: 3, md: 4 },
                    backgroundColor: reason.bgColor,
                    border: '2px solid',
                    borderColor: reason.color,
                    width: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    mb: 2,
                    flexWrap: 'wrap'
                  }}>
                    {React.cloneElement(reason.icon, { 
                      sx: { 
                        fontSize: 40, 
                        color: reason.color,
                        transform: 'scale(1)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.2)'
                        }
                      } 
                    })}
                    <Typography
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        ml: 2, 
                        fontWeight: 600, 
                        color: reason.color,
                        fontSize: { xs: '1.25rem', md: '2rem' }
                      }}
                    >
                      {reason.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      lineHeight: 1.8, 
                      color: 'text.secondary', 
                      wordBreak: 'break-word'
                    }}
                  >
                    {reason.content}
                  </Typography>
                </Paper>
              </Box>
            </Zoom>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSections; 