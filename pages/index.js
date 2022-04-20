
import { useState, useEffect } from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import Link from 'next/link'
import { Container, Left, TextWrapper, Heading, Subheading, List, ListItem, Nav , Right, Image, Wrapper, Loading} from '../styles/Home.module'
import Box from '../components/box/Box'
import Search from '../components/search/Search'

export default function Home() {
  const [search, setSearch] = useState(true);
  const [results, setResults] = useState(null)
  const [state,setState] = useState(
    {
      resultsHeading: "",
      resultsSubHeading:"",
      isLoading: false,
      error: null,
  })


  // API results
  let dataValue = [];  


  // FUNCTIONS ----- 
  // Events in the united states
  async function fetchUSEvents(){
    setState({isLoading:true})
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr');
    const data = await response.json();
    setState({isLoading:false})
    setState(
      {
        resultsHeading:"Events in the U.S", 
        resultsSubHeading:"Start scrolling to see all events in the U.S!"
      }
    )

    setResults(data._embedded.events);
  }
  
  // Music events in los angeles
  async function fetchLAMusicEvents(){
    setState({isLoading:true})
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr');
    const data = await response.json();
    setState({isLoading:false});
    
    setResults(data._embedded.events);
    setState(
      {
        resultsHeading:"Music events in L.A",
        resultsSubHeading: "Start scrolling to see all music events in Los Angeles!"
      }
    );
  }
  
  //Keyword Events
  async function fetchKeyWordEvents(keyword){
    setState({isLoading:true})
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=aHZGTbRV51sLBr9URwtcoKYSuSQmQXEr`);
    const data = await response.json();
    console.log(data)
    setState({isLoading:false})
    try{
      setResults(data._embedded.events);
      setState(
        {
          resultsHeading:`Results for "${keyword}"`,
          resultsSubHeading: `Start scrolling to see all results for '${keyword}'`,
          error:false,
        }
      )
    }catch(e){
      setState(
        {
          resultsHeading:`Results for "${keyword}"`,
          resultsSubHeading: `It looks like there are no results for '${keyword}'. Try something else :(`,
          error:true,
        }
      )
      setResults(null)
    }
  }


  if(results!= null){
    results.forEach(result =>{
      let arr = ([{
          name: result.name,
          state: ("state" in result._embedded.venues[0]) ? `${result._embedded.venues[0].state.name}` : ("country" in result._embedded.venues[0] ? result._embedded.venues[0].country.name : "error"),
          city: result._embedded.venues[0].city.name,
          countryCode: result._embedded.venues[0].country.countryCode,
          img: result.images[0].url,
          link: result.url,
          id: result.id
      }])
      dataValue.push(...arr)
    })
  }

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
              <ListItem onClick = {()=>fetchKeyWordEvents()}>
                <Link href = "/"><a>Events in Canada</a></Link>
              </ListItem>          
              <ListItem onClick = {()=>setSearch(!search)}> 
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
          {dataValue != null &&
            dataValue.map(result =>(
              <Box key = {result.id} id = {result.id} name = {result.name} /*startDate = {result.dates.start.dateTime}*/ img = {result.img} countryCode = {result.countryCode} state = {result.state} city = {result.city} link = {result.link} />
            ))
          }
          <Loading display = {state.isLoading}>
            <Heading>
              Loading your results, please wait...
            </Heading>
          </Loading>
        </Right>
      </Wrapper>
      <Search clicked = {search} fetchKeyWordEvents = {fetchKeyWordEvents}/>
    </Container>
  )
}
