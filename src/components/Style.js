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
    height: 8vw;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #E71B27;
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