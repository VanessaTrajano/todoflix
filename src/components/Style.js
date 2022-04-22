import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Lupa from '../images/lupinha.png'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        background-color: #000;
    }
`

export const Header = styled.header`
    height: 6vw;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #E71B27;
    border:1px solid plum;
`

export const TitleBox = styled.div`
    display:flex;
    width:45%;
    justify-content:space-evenly;
    nav{
        width:40%;
    }
`

export const Navigation = styled.ul`
    display:flex;
    width:100%;
    justify-content:space-around;
    color: #fff;
`

export const Select = styled.select`
    background-color: #000;
    border:none;
    color: #fff;
`

export const SearchBox = styled.div`
    display:flex;
    width:45%;
    justify-content:space-evenly;
`

export const Button = styled.button`
    background-color: #E71B27;
    border:none;
    height: 2.5vw;
    border-radius:2px;
    width:8vw;
    color:#fff;
    transition:0.4s;
    cursor:pointer;

    &:hover{
        border: 1.5px solid #fff;
    }
`

export const Input = styled.input`
    background-color: #2C2C2C;
    border: none;
    width:18vw;
    padding-left:2.7vw;
    background-image: url(${Lupa});
    background-repeat:no-repeat;
    background-size:2vw 2vw;
    background-position: 0.5vw;
    border-radius:2px;
`

export const Main = styled.main`
    color:#fff;
`

export const Cap = styled.div`
    display:flex;
    height:17.5vw;
    align-items:center;
    width:70vw;
    border: 1px solid blue;
    margin:4vw 2vw;
`

export const Info = styled.div`
    border: 2px solid green;
    margin: 0vw 1vw;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;

    div{
        display:flex;
        border:1px solid yellow;
        padding:0.2vw;
        width:5vw;
        justify-content: space-around;
    }
`

export const Image = styled.img`
    width:30vw;
`

export const Heart = styled.img`
    width: 1.2vw;
`

export const Movie = styled.div`
    width: 22vw;
    height:25vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid pink;
`

export const Img = styled.img`
    width:100%;
`