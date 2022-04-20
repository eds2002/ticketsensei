import * as Styled from './Search.module';
import { useState, useEffect } from 'react'
const apiKey = `AIzaSyBKpiCGZc55UA9anZKG8hDhvKaFdwWNNAQ`

const Search = ({clicked, setUserKeyword}) => {
  const [modal, setModal] = useState(clicked)
  useEffect(()=>{
    setModal(!modal)
  },[clicked])

  const modalClicked = (e) =>{
    if(e.target.id === 'modal'){
      setModal(!modal)
    }
  }

  const submit = (e)=>{
    e.preventDefault();
   const keyword = e.target.keyword.value
   console.log(keyword)
    if(keyword == ""){
      return;
    }
    setUserKeyword(keyword);
    e.target.keyword.value = ""
    setModal(!modal)
  }
  return (
    <Styled.Container id = "modal" enabled = {modal} onClick = {(e)=>modalClicked(e)}>
        <Styled.Wrapper>
            <form onSubmit = {submit}>
                <input type = "text" name = "keyword" placeholder = "Type an artist, event, or attraction..."/>
                <button>Search</button>
            </form>
        </Styled.Wrapper>
    </Styled.Container>
  )
}



export default Search