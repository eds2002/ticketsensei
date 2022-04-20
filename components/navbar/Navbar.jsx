import * as Styled from './Navbar.module'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Styled.NavContainer>
        <Styled.NavLeft>
            Search
            <br/>
            <Link href = "/"><a>Explore</a></Link>
            <Link href = "/"><a>Stories</a></Link>
        </Styled.NavLeft>
        <Styled.Logo>
            <Link href = "/"><a>Ticket Sensei</a></Link>
        </Styled.Logo>
        <Styled.NavRight>
            <Styled.List>
                <Styled.ListItem className = "link">
                    <Link href = "/"><a>Insta</a></Link>
                </Styled.ListItem>
                <Styled.ListItem className = "link">
                    <Link href = "/"><a>Fb</a></Link>
                </Styled.ListItem>
                <Styled.ListItem className = "button">
                    <Link href = "/"><Styled.Button>
                        Book now
                    </Styled.Button></Link>
                </Styled.ListItem>
            </Styled.List>
        </Styled.NavRight>
    </Styled.NavContainer>
  )
}

export default Navbar