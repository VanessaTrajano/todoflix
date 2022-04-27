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
`

export const TitleBox = styled.div`
    display:flex;
    width:45%;
    justify-content:space-evenly;
    color: #E71B27;
    nav{
        width:40%;
    }
`

export const Navigation = styled.ul`
    display:flex;
    width:100%;
    justify-content:space-around;
    color: #fff;

    img{
        margin-left: -3.3vw;
    }
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

export const Item = styled.li`
    &:hover{
        border-bottom: 0.2vw solid white;
    }
`

export const Categorias = styled.ul`
    margin: 2vw 0 0 6vw;
    list-style: none;
    background-color: black;
    width: 9vw;
    height: 12vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Seta = styled.img`
    width: 2vw;
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
    color: #fff;
`

export const Main = styled.main`
    color:#fff;
`

export const Cap = styled.div`
    display:flex;
    height:17.5vw;
    align-items:center;
    width:70vw;
    margin:4vw 2vw;
`

export const Info = styled.div`
    margin: 0vw 1vw;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    text-align:justify;

    div{
        display:flex;
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
    color:white;
    
    h2{
        text-align: center;
    }

    p{
        text-align: justify;
        margin: 0 1vw;
    }
`

export const Img = styled.img`
    width:100%;
`