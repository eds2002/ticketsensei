import Link from 'next/link'
import { Container, Left, TextWrapper, Heading, Subheading, List, ListItem, Nav , Right, Image, Wrapper} from '../styles/Home.module'
import Box from '../components/box/Box'

const endPoint = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr"
export async function getServerSideProps(){
  const res = await fetch(endPoint)
  const data = await res.json();

  return {
    props: {search: data}
  };
}

export default function Home({search}) {
  const results = search._embedded.events;
  console.log(results);
  return (
    <Container>
      <Wrapper>
        <Left>    
          <TextWrapper>
            <Heading>
              Look for events
            </Heading>
            <Subheading>
              Want to find out events by your area? We make it simple by looking for you.
            </Subheading>
          </TextWrapper>
          <Nav>
            <List>
              <ListItem>
                <Link href = "/"><a>Events in the U.S</a></Link>
              </ListItem>          
              <ListItem>
                <Link href = "/"><a>Music Events in Los Angeles</a></Link>
              </ListItem>          
              <ListItem>
                <Link href = "/"><a>Online Events</a></Link>
              </ListItem>          
              <ListItem>
                <Link href = "/"><a>Search Events...</a></Link>
              </ListItem>          
            </List>
          </Nav>
        </Left>
        <Right>
          <TextWrapper>
            <Heading>
              Events in the United States.
            </Heading>
            <Subheading>
              Scroll to see the endless activites in your country.
            </Subheading>
          </TextWrapper>
          {results.map(result =>(
            <Box id = {result.id} name = {result.name} startDate = {result.dates.start.dateTime} img = {result.images[0].url} countryCode = {result._embedded.venues[0].country.countryCode} state = {result._embedded.venues[0].state.name} city = {result._embedded.venues[0].city.name}/>
          ))}
        </Right>
      </Wrapper>
    </Container>
  )
}
