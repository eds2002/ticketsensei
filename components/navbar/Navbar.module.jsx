import styled from 'styled-components'

export const NavContainer = styled.div`
width:100vw;
height:75px;
display:flex;
justify-content:space-between;
align-items:center;
background:hsla(360,0%,95%,1);
`

export const NavLeft = styled.nav`
display:flex;
flex:1;
justify-content:center;
align-items:center;
gap:30px;
a{
    font-size:0.805rem;
    font-weight:700;
    color:hsla(360,0%,45%,1)
}
`
export const Logo = styled.h1`
font-size:1rem;
color:hsla(360,0%,30%,1);
flex:1;
display:flex;
justify-content:center;
align-items:center;
`
export const NavRight = styled.nav`
flex:1;
display:flex;
justify-content:center;
align-items:center;
`
export const List = styled.ul`
list-style-type:none;
display:flex;
align-items:center;
justify-content:center;
gap:30px;
`
export const ListItem = styled.li`

`
export const Button = styled.button`
padding:10px 25px;
border-radius:500px;
border:2px solid hsla(215,0%,50%,1);
background:none;
cursor:pointer;
&:hover{
    border:2px solid hsla(215,100%,50%,1);
    background:hsla(215,100%,50%,0.1)
}
`

