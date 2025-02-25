import { Box, Typography, Container, Paper } from '@mui/material';

// Update the color constants
const seattleColors = {
  green: '#004833',  // Deep Seattle green
  gold: '#FFB81C',   // Vibrant gold
  red: '#CD2027',    // Classic red accent
  white: '#FFFFFF',
  darkText: '#1B4B66'
};

const NoRoute = () => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      borderRadius: 4,
      backgroundColor: `${seattleColors.green}08`,
      border: `2px solid ${seattleColors.green}33`,
      mb: 8
    }}
  >
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ mb: 2, color: seattleColors.darkText, fontWeight: 600 }}>
        1. No Route
      </Typography>
      <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
        Maybe the purest form of saunter there is having no plan at all. In a world where technology has made it much more difficult to get lost, you could very well use your saunter to put your phone away and let your feet guide you way. You could very realistically show up to start walking on May 17th with no set route in mind and then just proceed to head south. Seattle's geography makes it a little easier to do that without getting lost. If you do get lost, you can always whip out your phone and get back on track. Or better yet you could ask for directions like all of your ancestors in the olden days.
      </Typography>
      <Box sx={{ 
        backgroundColor: `${seattleColors.gold}08`,
        p: 4,
        borderRadius: 2,
        border: `2px solid ${seattleColors.gold}33`,
        mb: 3
      }}>
        <Typography variant="h6" sx={{ mb: 2, color: seattleColors.darkText, fontWeight: 600 }}>
          Suggestion
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
          You can very easily blend the desire to have a non-scripted adventure with not wanting to get completely lost. The way to do that is by not checking your phone for directions until you get to a certain point, say for example the ship canal, or I-90, or Seward Park. It is very unlikely that anyone will intuitively know where the southernmost point of the city is, so unless you are incredibly well familiar with south Seattle it may be a good idea to have your phone handy to get you to the end.
        </Typography>
      </Box>
    </Box>
  </Paper>
);

const SuggestedRoute = () => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      borderRadius: 4,
      backgroundColor: `${seattleColors.green}08`,
      border: `2px solid ${seattleColors.green}33`,
      mb: 8
    }}
  >
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ mb: 2, color: seattleColors.darkText, fontWeight: 600 }}>
        2. Suggested Route
      </Typography>
      <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
        As someone who walked across the city, region, state and country I feel uniquely qualified to offer a suggested route for you to walk the length of Seattle.
      </Typography>
      <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
        What I have prioritized in a suggested route is reducing exposure to cars, seeing some of Seattle's lovely parks, getting some access to the lakefront, variety, view points, access to some lunch spots in the middle portion of the day, and keeping at a reasonable 20 miles. It also is a route that provides some flexibility and in no way shape or form needs to be followed to a T.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, color: seattleColors.darkText }}>
        The route is as follows:
      </Typography>
      <Box component="ul" sx={{ pl: 3, lineHeight: 1.8 }}>
        <Typography component="li" sx={{ mb: 1 }}>Everyone will begin at the light rail station just north of the border of Seattle, from there proceed along 5th Ave NE to on the West Side of the Jackson Park Golf Course. There will be a nice wooded trail there that will allow you to walk the length of the course.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Proceed to Roosevelt Way NE and follow it until you reach NE 103rd St, from there take the neighborhood greenway on 12th Ave NE until you reach Maple Leaf Reservoir Park.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Continue to follow the signs for the neighborhood greenway along 15th Ave NE to reach Ravenna park. Make your way to Ravenna Ave NE at the Southeast end of the park and continue along there until you reach the Burke Gilman. Enjoy the Burke Gilman until you reach the south end of the campus where you will then use the elevated walkway to to get over to the side of Husky Stadium.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Cross the Montlake bridge and then cut through the neighborhood and follow the signs to the pedestrian bridge crossing SR-520. Continue along E LK Washington Blvd to get to the arboretum.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Enjoy the trees in the middle of Spring and make your own way to the the southern end of the arboretum to reconnect with E LK Washington Blvd. Begin to walk on the Blvd until you reach 32nd Ave E. Once you reach E Howell St you can head over to 34th Ave to see the Madrona center until E Cherry St where you will then need to get on 31st Ave</Typography>
        <Typography component="li" sx={{ mb: 1 }}> You will continue on 31st Ave until S Atlantic St (make sure to take in the view at Mt. Baker Ridge Viewpoint). Head East on Atlantic and then make your way down Lakeside Ave either via the staircases or through Colman Park.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Lakeside Ave will turn into Lake Washington Blvd and continue along it until you get to Seward Park.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Once at Seward Park take Seward Park Ave S all the way to S Cloverdale Pl that will connect you with Rainier Ave S</Typography>
        <Typography component="li" sx={{ mb: 1 }}>If you continue straight, Rainier Ave S will turn into 51st Ave S. If you would like a quick detour to the Kubota Garden proceed along Renton Ave S instead of 51st Ave S.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Had you continued along 51st Ave S, it will intersect with Beacon Ave S. Stop freakin and take Beacon all the way to the Garden of Gethsemane Church of God In Christ.</Typography>
        <Typography component="li" sx={{ mb: 1 }}>Celebrate your accomplishment!</Typography>
      </Box>
      <Typography sx={{ mt: 3, mb: 3, lineHeight: 1.8 }}>
        Like was said before, no need to follow this route religiously, it is merely a suggestion. If you would like to visualize the route you can see it here:
      </Typography>
      {/* Map Section */}
      <Box sx={{
        width: '100%',
        height: { xs: '300px', md: '400px' },
        borderRadius: '8px',
        overflow: 'hidden',
        border: `2px solid ${seattleColors.green}33`
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d49768.73361740313!2d-122.3109196!3d47.6027653!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x549011174d51d78b%3A0x143b9a744305735e!2sShoreline%20South%2F148th%2C%20Shoreline%2C%20WA!3m2!1d47.7361!2d-122.32522999999999!4m5!1s0x549042f2eae2620f%3A0xe636722dc434d2f8!2sGarden%20of%20Gethsemane%20Church%20of%20God%20In%20Christ%2C%20Beacon%20Avenue%20South%2C%20Seattle%2C%20WA!3m2!1d47.4958818!2d-122.2599922!5e1!3m2!1sen!2sus!4v1740292412825!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  </Paper>
);

const MakeYourOwnRoute = () => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      borderRadius: 4,
      backgroundColor: `${seattleColors.green}08`,
      border: `2px solid ${seattleColors.green}33`,
      mb: 8
    }}
  >
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ mb: 2, color: seattleColors.darkText, fontWeight: 600 }}>
        3. Make Your Own Route
      </Typography>
      <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
        Maybe you are thinking to yourself "well if I am going to walk 20+ miles I might as well make my own route." First off love the way you think, and if you are an experienced walker and don't need any guidance we will see you at the start and the finish!
      </Typography>
      <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
        If that's not you and you would like some help in what to consider when planning a route this resource is for you.
      </Typography>

      {/* First Off subsection */}
      <Typography variant="h6" sx={{ mb: 2, color: seattleColors.darkText }}>
        First Off
      </Typography>
      <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
        If you are looking to build a route, the best place to start is through your preferred map app. I generally use Google Maps and suggest using the web version of it. When you plug in the start point the Shoreline South Light Rail station and the end point Garden of Gethsemane into google maps using the "walking" option you get a pretty straightforward route that will take about 18 miles. I do not recommend this route because it won't be that interesting and you will find yourself on pretty busy roads for a good chunk of it. Instead use this as a template to get a better sense of where you would like to pass through.
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, color: seattleColors.darkText }}>
        Things to consider when building your route
      </Typography>

      {/* Trails Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: seattleColors.darkText }}>
          Trails and pleasant places to walk
        </Typography>
        <Typography sx={{ mb: 2, lineHeight: 1.8 }}>
          Generally, people like to walk in areas with few cars. If you are a masochist and that is not you, might I suggest Aurora, Lake City Way, Rainier, and MLK Jr Way. But for the normal person looking for a more pleasant saunter my first suggestion would be to check out the bike layer on google maps. It is a good resource to show you where the trails are in the city. Another great resource is the bike web map of the city. Generally places that are great to bike are great to walk including trails and neighborhood greenways. For those unfamiliar with neighborhood greenways they are residential streets designed to slow car traffic, making them pleasant places to walk. They also have signs guiding your way making them very easy to follow.
        </Typography>
        <Box sx={{ 
          backgroundColor: `${seattleColors.gold}08`,
          p: 4,
          borderRadius: 2,
          border: `2px solid ${seattleColors.gold}33`,
          mb: 3
        }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Suggestion
          </Typography>
          <Typography sx={{ 
            color: seattleColors.darkText,
            lineHeight: 1.8 
          }}>
            If your goal is to maximize the amount of trails and reduce your exposure to traffic my suggestion would be similar to my suggested route with a few tweaks. First you want to make your way to the Burke Gilman along Lake Washington, from there head south to cross the montlake bridge and make your way over the newly completed pedestrian lid spanning 520 to the arboretum, enjoy your stroll through the arboretum and head to Lake Washington Blvd, this follow this along the lake and this will bring you all the way to Seward Park. After this you will need to navigate your way until the end, but this route is the best way to reduce your exposure to cars
          </Typography>
        </Box>
      </Box>
      {/* Lunch Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: seattleColors.darkText }}>
          Where to get lunch
        </Typography>
        <Typography sx={{ mb: 2, lineHeight: 1.8 }}>
          You're gonna build up an appetite while walking, so you may want to think about where you will want to get lunch. It could just be a scenic viewpoint where you enjoy a packed lunch or something you buy from the grocery store. On the other hand it could be an opportunity to try a new restaurant somewhere along your way. Never hurts to support a small local business and there are plenty of great restaurants in the city to help power you through the rest of your journey.
        </Typography>
        <Box sx={{ 
          backgroundColor: `${seattleColors.gold}08`,
          p: 4,
          borderRadius: 2,
          border: `2px solid ${seattleColors.gold}33`,
          mb: 3
        }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Suggestion
          </Typography>
          <Typography sx={{ 
            color: seattleColors.darkText,
            lineHeight: 1.8 
          }}>
            There are so many restaurants in this city that it would be impossible to suggest one (unless they reached out to me about providing a special deal to folks Sauntering wink wink nudge nudge). But it is important to think that you will probably be in the central part of the city around lunch time. You also may not want something that is going to weigh you down when you start back walking. Bahn Mi's are always a good, light lunch option and there are plenty of affordable spots from U-District down to Little Saigon.
          </Typography>
        </Box>
      </Box>

      {/* Ship Canal Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: seattleColors.darkText }}>
          Crossing the ship canal
        </Typography>
        <Typography sx={{ mb: 2, lineHeight: 1.8 }}>
          Being that the ship canal divides the city and there are only 6 places to cross it on foot, it serves as an important feature to think about how you will traverse the city. The six crossings being the Montlake, University, Fremont, Aurora, Ballard bridges, and the Locks. Each lends itself to seeing a different part of the city and can play a crucial role in determining your route. The Montlake bridge makes sense if you would like to stay close to lake washington. The University bridge makes it easier for you to pass through cap hill. The Fremont bridge will allow you to walk through Greenlake, Wallingford, Fremont, and then Westlake and South Lake Union before heading downtown. The Aurora bridge is kind of a wild card because although you are walking on the side of the highway, you will have the best views of all the bridges and puts you in a position to pass through Queen Anne. The Ballard Bridge is the least pleasant to cross with its narrow sidewalks and busy traffic, but from there you can head through Interbay and link up with the Elliott Bay trail to get some great waterfront views. Lastly, the locks are a Seattle staple, but will be the longest detour. Crossing at the locks lend itself to seeing Ballard and Magnolia.
        </Typography>
        <Box sx={{ 
          backgroundColor: `${seattleColors.gold}08`,
          p: 4,
          borderRadius: 2,
          border: `2px solid ${seattleColors.gold}33`,
          mb: 3
        }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Suggestion
          </Typography>
          <Typography sx={{ 
            color: seattleColors.darkText,
            lineHeight: 1.8 
          }}>
            Think about what neighborhoods you would like to see in the middle part of your journey and/or if you want to spend some time on the water and this will help determine which bridge you'll want to cross at.
          </Typography>
        </Box>
      </Box>

      {/* Landmarks Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: seattleColors.darkText }}>
          Landmarks
        </Typography>
        <Typography sx={{ mb: 2, lineHeight: 1.8 }}>
          Never been to the top of the space needle, bought anything at Pike Place or browsed the rubber chicken museum, or seen the Kurt Cobain benches? Take the saunter as an opportunity to see all of the sights that make Seattle a unique city. You can totally be a tourist in your city. One of the best resources to find these is AtlasObscura. They have an app that shows you where unique and interesting sights are on an easy to use map.
        </Typography>
        <Box sx={{ 
          backgroundColor: `${seattleColors.gold}08`,
          p: 4,
          borderRadius: 2,
          border: `2px solid ${seattleColors.gold}33`,
          mb: 3
        }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Suggestion
          </Typography>
          <Typography sx={{ 
            color: seattleColors.darkText,
            lineHeight: 1.8 
          }}>
            Find somewhere you've never been or something you've never seen and make a point to visit it.
          </Typography>
        </Box>
      </Box>

      {/* Events Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: seattleColors.darkText }}>
          Events
        </Typography>
        <Typography sx={{ mb: 2, lineHeight: 1.8 }}>
          The great thing about living in a city the size of Seattle is there is always something going on. This can be a blessing or a curse. Sometimes you stumble upon a friendly and welcoming Indonesian independence day celebration and sometimes you stumble upon an endless stream of loud and belligerent motorcyclists on a bombsquad takeover, who don't like being flipped off. Sometimes they are on the same day (true story). Needless to say there are always things going on like farmers markets, concerts, sporting events, festivals, etc. and you can either make a point to visit them or a point to avoid them when planning your route, or you can serendipitously stumble upon them. The intended date is May 17th and if you are interested to see what's happening that weekend check out event12.com/Seattle.
        </Typography>
        <Box sx={{ 
          backgroundColor: `${seattleColors.gold}08`,
          p: 4,
          borderRadius: 2,
          border: `2px solid ${seattleColors.gold}33`
        }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Suggestion
          </Typography>
          <Typography sx={{ 
            color: seattleColors.darkText,
            lineHeight: 1.8 
          }}>
            Don't give the bird to belligerent people on motorcycles, no matter how annoying they are. A thumbs down would suffice. Also the U-district farmers market will be in full swing on that Saturday and there is always something at the Seattle center. Other events to consider on May 17th are the Norwegian Constitution Day celebration in Ballard and the Kendrick Lamar concert happening at Lumen field.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Paper>
);

function BuildRoute() {
  return (
    <Box id="route" sx={{ py: 8, backgroundColor: seattleColors.white, position: 'relative', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom
          sx={{ mb: 12, fontWeight: 600, color: seattleColors.green }}>
          Plan Your Route
        </Typography>

        {/* Route Introduction */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h3" sx={{ 
            mb: 4,
            fontWeight: 600,
            color: seattleColors.darkText,
            fontSize: { xs: '1.25rem', md: '2rem' }
          }}>
            Route
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
            A key component of the Seattle Super Saunter is the fact there is no set route. There is a start point and an endpoint and how you get between those two points is up to you. With that being said we believe it is important to provide some sense of direction as most people partaking have never done anything like this before. There are three options for you to consider on how you want to Saunter and we discuss them each below: no route, suggested route, or build your own route.
          </Typography>

          <NoRoute />
          <SuggestedRoute />
          <MakeYourOwnRoute />
        </Box>
      </Container>
    </Box>
  );
}

export default BuildRoute; 