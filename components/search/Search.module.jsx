import styled from 'styled-components';

export const Container = styled.div`
    position:Fixed;
    width:100vw;
    height:100vh;
    background:hsla(360,0%,0%,0.6);
    top:0;
    left:0;
    display:${({enabled}) => enabled ? "flex" : "none"};
    justify-content:center;
    align-items:center;
`
export const Wrapper = styled.div`

form{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
}

input{
padding:20px 20px;
width:80vw;
max-width:600px;
font-size:20px;
border:2px solid hsla(360,0%,40%,1);
outline:0px solid hsla(360,0%,70%,1);
background:hsla(360,0%,100%,1);
transition:0.2s ease;
&:placeholder-shown{
    font-size:20px;
}
&:focus{
    background:hsla(360,0%,100%,1);
    border:2.5px solid hsla(200,70%,80%,1);
}
}

button{
    position:absolute;
    right:0;
    margin:5px;
    top:0;
    bottom:0;
    padding:0px 20px;
    background:hsla(200,70%,50%,1);
    font-size:17px;
    border:none;
    outline:none;
    color:white;
    font-weight:500;
    cursor:pointer;
    &:hover{
        background:hsla(200,70%,60%,1);
    }
}


`