
import { useState, useEffect } from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import Link from 'next/link'
import { Container, Left, TextWrapper, Heading, Subheading, List, ListItem, Nav , Right, Image, Wrapper, Loading} from '../styles/Home.module'
import Box from '../components/box/Box'
import Search from '../components/search/Search'

export default function Home() {

  const [state,setState] = useState({
    resultsHeading: "Click on any link to get started!",
    resultsSubHeading:"",
    isLoading: false,
    search:false,
  })
  const [results, setResults] = useState(null)

  

  // Events in the united states
  async function fetchUSEvents(){
    setIsLoading(true);
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr');
    const data = await response.json();
    setIsLoading(false);
    setResultsHeading("Events in the United States");
    setResultsSubHeading("Start scrolling to see all events in the U.S!");

    setResults(data._embedded.events);
  }
  
  // Music events in los angeles
  async function fetchLAMusicEvents(){
    setIsLoading(true);
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr');
    const data = await response.json();
    setIsLoading(false);
    setResultsHeading("Music events in L.A");
    setResultsSubHeading("Start scrolling to see all music events in Los Angeles!");
    
    setResults(data._embedded.events);
  }
  
  //UK Events
  async function fetchCAEvents(){
    setIsLoading(true);
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr');
    const data = await response.json();
    setIsLoading(false);
    setResultsHeading("Events in Canada");
    setResultsSubHeading("Start scrolling to see all events in Canada!");
    setResults(data._embedded.events);
  }
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
              Want to find out events by your area? Let's help you look.
            </Subheading>
          </TextWrapper>
          <Nav>
            <List>
              <ListItem onClick = {()=>fetchUSEvents()}>
                <Link href = "/"><a>Events in the U.S</a></Link>
              </ListItem>          
              <ListItem onClick = {()=>fetchLAMusicEvents()}>
                <Link href = "/"><a>Music Events in Los Angeles</a></Link>
              </ListItem>          
              <ListItem onClick = {()=>fetchCAEvents()}>
                <Link href = "/"><a>Events in Canada</a></Link>
              </ListItem>          
              <ListItem onClick = {()=>setState({search: true})}> 
                <Link href = "/"><a>Search Events...</a></Link>
              </ListItem>          
            </List>
          </Nav>
        </Left>
        <Right>
          <TextWrapper>
            <Heading>
              {state.resultsHeading}
            </Heading>
            <Subheading>
              {state.resultsSubHeading}
            </Subheading>
          </TextWrapper>
          {results != null &&
            results.map(result =>(
              <Box id = {result.id} name = {(result.name ? result.name : "N/A")} startDate = {result.dates.start.dateTime} img = {result.images[0].url} countryCode = {result._embedded.venues[0].country.countryCode} state = {result._embedded.venues[0].state.name} city = {result._embedded.venues[0].city.name} link = {result.url}/>
            ))
          }
          <Loading display = {state.isLoading}>
            <Heading>
              Loading your results, please wait...
            </Heading>
          </Loading>
        </Right>
      </Wrapper>
      <Search/>
    </Container>
  )
}
