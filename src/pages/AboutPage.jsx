import { Box, Typography, Container, Link, Paper } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CampaignIcon from '@mui/icons-material/Campaign';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../components/Footer';

function AboutPage() {
  const goals = [
    {
      title: "Exploration",
      icon: <ExploreIcon sx={{ color: '#FF6B35' }} />,
      content: "I want people to see the city on foot to explore new places, and get a fresh perspective on Seattle"
    },
    {
      title: "Community",
      icon: <PeopleIcon sx={{ color: '#004E89' }} />,
      content: "I want people to share in the experience whether that be doing it with their friends or coming together afterwards to share their experience with other saunterers. I believe there already to be a strong walking community in Seattle, as well as people willing to do something fun and silly like this. So the hope is to bring people together."
    },
    {
      title: "Appreciation",
      icon: <FavoriteIcon sx={{ color: '#2BAE66' }} />,
      content: "Oftentimes I'll ask people what their favorite part of Seattle is and they will say something like \"the mountains\" or \"the outdoors\" or some quality that could apply to Kirkland as much as it does to Seattle. To quote Murray Morgan's Skid Row \"Mention Culture and Seattle changed the subject to scenery. 'To hear you people talk' an easterner told a Seattle friend, 'you'd think you built Mount Rainier.'\" Part of the reason for the walk is to show that you don't need to drive out to the mountains to have an adventure. You can have one in the city you call home."
    },
    {
      title: "Advocacy",
      icon: <CampaignIcon sx={{ color: '#8A4FFF' }} />,
      content: "Although Seattle is a pretty walkable city compared to most other American cities, we still have a long way to go in regards to reaching our city's Vision Zero goal of zero traffic fatalities. We have partnered with the Urbanist to get the word out about this event and to support their journalism in bringing these issues to the public."
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh', pt: 10 }}>
      <Container maxWidth="lg">
        {/* Who is organizing section */}
        <Box sx={{ py: 8 }}>
          <Paper 
            elevation={0}
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              p: { xs: 3, md: 6 },
              backgroundColor: 'rgba(27, 75, 102, 0.02)',
              border: '1px solid rgba(27, 75, 102, 0.1)',
              borderRadius: 2
            }}
          >
            <Typography variant="h4" component="h1" sx={{ 
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
              Who is organizing this?
            </Typography>

            <Box sx={{ 
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              '& img': {
                width: '100%',
                height: 'auto',
                display: 'block'
              }
            }}>
              <img 
                src="https://newschannel9.com/resources/media/1a56921c-4b06-45e1-9123-857905d59a46-medium16x9_HoldenMinorRinger2.jpg" 
                alt="Holden with his walking stroller in front of the US Capitol building"
                loading="lazy"
              />
            </Box>

            <Typography variant="h6" sx={{ mb: 2 }}>
              Howdy y'all,
            </Typography>
            <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
              My name is Holden Minor Ringer and I'm the primary organizer for the Seattle Super Saunter. Prior to returning to Seattle in May of 2024 I had walked across the country starting March 8th from La Push, WA and over the course of 423 days, 4,500+ miles and 20 states I completed my journey in New Haven, CT on May 4th 2024. Before my journey I had walked all around the region to prepare, having walked from Everett to Seattle, Seattle to Tacoma, all around Lake Washington, from Ballard to Tiger Mountain (and back), as well as from Vancouver, BC back to Seattle. So to make a long story short I am a big walker. Part of the reason I did my cross country walk was to raise attention about issues regarding walkability, while raising money for AmericaWalks.
            </Typography>
            <Link 
              href="https://www.instagram.com/holden.minor.ringer/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#1B4B66',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              <InstagramIcon sx={{ mr: 1 }} />
              Proof that I am a real person
            </Link>
          </Paper>
        </Box>

        {/* The Goal section */}
        <Box sx={{ pb: 12 }}>
          <Paper 
            elevation={0}
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              p: { xs: 3, md: 6 },
              backgroundColor: 'rgba(27, 75, 102, 0.02)',
              border: '1px solid rgba(27, 75, 102, 0.1)',
              borderRadius: 2
            }}
          >
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
              The Goal
            </Typography>

            <Typography sx={{ mb: 6, textAlign: 'center' }}>
              My goal is to get as many people to take part in the Seattle Super Saunter as possible. It is that simple. The reasons being:
            </Typography>

            {goals.map((goal, index) => (
              <Box key={index} sx={{ mb: 6 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  borderLeft: `4px solid ${goal.icon.props.sx.color}`,
                  pl: 2
                }}>
                  {goal.icon}
                  <Typography variant="h6" sx={{ 
                    ml: 2, 
                    color: '#1B4B66',
                    fontWeight: 600
                  }}>
                    {goal.title}
                  </Typography>
                </Box>
                <Typography sx={{ 
                  lineHeight: 1.8,
                  pl: 6
                }}>
                  {goal.content}
                </Typography>
              </Box>
            ))}

            <Typography sx={{ mt: 6, lineHeight: 1.8 }}>
              There are plenty more reasons that make me willing to invest my time, energy and money to make sure the Seattle Super Saunter is an event that others are excited to take part in, but overall I think it will be a good time and I want to share the opportunity with others.
            </Typography>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default AboutPage; 