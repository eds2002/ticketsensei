import styled from 'styled-components'

export const Container = styled.div`
width:100vw;
height:100%;
overflow:hidden;
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
    transition:color 0.15s ease;
    &:hover{
        color:hsla(360,70%,50%,1);
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
`
