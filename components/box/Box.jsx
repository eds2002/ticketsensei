import styled from 'styled-components'

const Box = ({img, name, desc, city, state, startDate}) => {
  return (
    <Container>
        <BoxImage>
            <img src = {img} alt = {`image of ${name}`}></img>
        </BoxImage>
        <EventName>{name}</EventName>
        <Date>{state}, {city} </Date>
        <EventDesc>{desc}</EventDesc>
        <Price></Price>
        <Links>
            <Button>Learn More</Button>
        </Links>
    </Container>
  )
}

const Links = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
padding:25px;
border-radius:15px;
background:hsla(360,0%,0%,0.5);
opacity:0;
display:flex;
justify-content:center;
align-items:center;
`

const Container = styled.div`
background:hsla(360,0%, 90%,1);
border-radius:15px;
padding:15px;
margin:50px 0px;
position:relative;
cursor:pointer;
&:hover ${Links}{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:hsla(360,0%,0%,0.5);
    opacity:1;
    transition-delay:1s;
    transition-property:opacity;
}
`
const BoxImage = styled.div`
background:gray;
width:100%;
height:125px;
border-radius:15px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    background-size:cover;
    border-radius:15px;
}
`
const EventName = styled.p`
font-size:1.5rem;
font-weight:700;
margin:15px 0px 0px 0px;
`
const EventDesc = styled.p`
line-height:1.6;
font-weight:500;
`

const Price = styled.p`
line-height:1.6;
font-weight:500;
`

const Date = styled.p`
font-size:1.2rem;
font-weight:700;
color:hsla(360,0%,30%,1);
`

const Button = styled.button`
padding:15px 30px;
border-radius:10px;
border:2px solid white;
background:none;
font-size:0.9rem;
font-weight:400;
color:white;
cursor:pointer;
&:hover{
    background:hsla(360,100%,100%,0.2);
}
`


export default Box