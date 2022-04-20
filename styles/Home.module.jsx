import styled from 'styled-components'

export const Container = styled.div`
width:100vw;
height:100%;
overflow:hidden;
position:relative;
`

export const Wrapper = styled.div`
display:flex;
`
export const Left = styled.div`
width:50vw;
padding:50px;
height:100%;
display:flex;
flex-direction:column;
@media (max-width: 800px) {
    width:100vw;
    text-align:center;
}
`
export const TextWrapper = styled.div`
`
export const Heading = styled.h1`
font-size:3rem;
font-weight:800;
`
export const Subheading = styled.p`
font-size:1.2rem;
font-weight:200;
margin:10px 0px;
`

export const Nav = styled.nav`
`
export const List = styled.ul`
list-style-type:none;
`
export const ListItem = styled.li`
font-size:2.3rem;
font-weight:700;
margin:40px 0px;
a{
    color:hsla(360,0%,70%,1);
    transition:color 0.05s ease;
    &:hover{
        color:hsla(200,70%,50%,1);
    }
}
`

export const Image = styled.img`
background-position:center;
width:100%;
height:100%;
object-fit:contain;
background-position:center;
background-size: cover;
`




// Right side
export const Right = styled.div`
width:50vw;
height:100vh;
padding:50px;
overflow:scroll;
position:relative;
float:right;
background:white;
@media (max-width: 800px) {
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:100vw;
    height:100vh;
    text-align:center;
    margin:0 auto;
    transform:translateY(${({mobileDisplay}) => mobileDisplay ? "0" : "100%"});
    transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    div{
        margin:25px auto;
    }
}
@media (max-width:800px){
    .line{
        width:35px;
        height:7px;
        background:hsla(360,0%,50%,1);
        border-radius:500px;
        position:absolute;
        top:0;
        left:50%;
        transform:translate(-50%,0%);
        cursor:pointer; 
    }    
}
`

export const Loading = styled.div`
display: ${(props) => props.display === true ? "flex" : "none"};
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
justify-content:center;
align-items:center;
background:white;
text-align:center;

`
