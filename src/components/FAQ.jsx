import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import seagullPicture from '../../pics/IMG_9997.JPG';
import { seattleColors } from '../styles/colors';

function FAQ() {
  const faqs = [
    {
      question: "Is this a race?",
      answer: "No, there is no prize for finishing first and there is no set course. The intention is for folks to go at their own pace and not miss the opportunity to soak in their city."
    },
    {
      question: "Do I need to walk the whole way?",
      answer: "No, it is your adventure and the only prize you will win for walking the whole way is the sense of accomplishment. This saunter is intended to be as inclusive as a 20ish mile walk can be, so if people get tired or bored there is no issue hopping on the bus or a lime scooter. There is even a bus stop right at the end for the 107 bus."
    },
    {
      question: "What should I bring?",
      answer: "Good walking shoes, water, hat, sunscreen, snacks, a battery pack are all pretty good items to bring along. If you are worried about blisters, consider bringing some extra socks and some bandaids. The nice thing about doing this saunter in Seattle is that you can just stop at a store in case you forget something."
    },
    {
      question: "What is the date and time of the Seattle Saunter?",
      answer: "It will begin at 10 am May 17th 2025"
    },
    {
      question: "Will there be aid stations?",
      answer: "No, you are on your own after you start, but also this is not the wilderness. Maybe if this event has multiple iterations aid stations could be a thing in the future."
    },
    {
      question: "Are dogs welcome?",
      answer: "Of course! I'm sure they would love a long walk"
    },
    {
      question: "What is the route?",
      answer: "You choose! No seriously. The start and end points are fixed but how you move from one place to another is up to you. There is a whole page on things to consider when building a <a href='#route'>route</a> here. So check it out for suggestions."
    },
    {
      question: "What kind of shoes should I wear?",
      answer: "Shoes that you are comfortable walking long distances in. Everyone's foot needs are separate, so be they hiking boots, running shoes, or some light up sketchers. Find something that will work for you.\n\nPro Tip: make sure you have tried out and broken in your shoes before attempting to walk 20+ miles in them."
    },
    {
      question: "How many miles should I expect?",
      answer: "The shortest distance from the start point to the endpoint is around 18 miles. That being said most routes will probably be around 20-25 miles depending on what you want to see and what route you take."
    },
    {
      question: "How long will it take?",
      answer: "The average person will probably take 6 to 9 hours to walk the entire length depending on route, speed and times stopped."
    },
    {
      question: "How should I train?",
      answer: "Go out and walk more whether it be to the grocery store, the park, the brewery or around the neighborhood. You can definitely look up \"long distance walking training plan\" but my suggestion is if you have an opportunity to replace a trip (be it a car, bus, bike) then do it with a walk. Additionally if you have some time off say on the weekend or after work try taking a longer walk be it 6, 12 or 18+ miles, whatever feels right to you."
    },
    {
      question: "Can I partake if I'm not from Seattle?",
      answer: "Of course, the more the merrier, come and see our wonderful city!"
    },
    {
      question: "Is this safe?",
      answer: "Participating in this puts you in the same kind of danger any pedestrian faces. So if anything befalls you blame the city, county, state etc. and not me.\n\nAlthough social media and traditional media can make Seattle seem like a lawless wasteland it is generally a safe place compared to many other American cities. As someone who has walked through all corners of the city (as well as cities across the country) day and night, I can attest to that.\n\nAre there going to be careless and negligent drivers? For sure. Will you see folks struggling and in distress if you venture down 3rd or past 12th and Jackson? Almost certainly. Do you not want to run into a sex worker? Then probably don't walk down Aurora. But part of the reason I am organizing this walk is to broaden people's perspectives and to get them to see the great this city has to offer, but also what needs our help."
    }
  ];

  return (
    <Box 
      id="faq"
      sx={{ 
        py: 8,
        backgroundColor: '#FFFFFF'
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
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion 
            key={index}
            sx={{
              mb: 2,
              borderRadius: '8px !important',
              '&:before': {
                display: 'none',
              },
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              },
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.02)',
                },
              }}
            >
              <Typography 
                variant="h6" 
                color="primary"
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  pb: 1,
                  whiteSpace: 'pre-line'
                }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              >
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Box sx={{ 
          mb: 6,
          mt: 6,
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <img 
            src={seagullPicture} 
            alt="A wise seagull overlooking the city"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              py: 2,
              color: seattleColors.darkText,
              backgroundColor: `${seattleColors.green}05`,
              borderBottom: `2px solid ${seattleColors.green}33`,
              borderLeft: `2px solid ${seattleColors.green}33`,
              borderRight: `2px solid ${seattleColors.green}33`,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            Let the wise seagull answer your questions
          </Typography>
        </Box>
    </Box>
  );
}

export default FAQ; 