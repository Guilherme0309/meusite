/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import Produto1 from "./view/Produto1";
import Produto2 from "./view/Produto2";
import Produto3 from "./view/Produto3";
import Produto4 from "./view/Produto4";
import Produto5 from "./view/Produto5";
import Produto6 from "./view/Produto6";
import { GlobalStyle } from "./styles/styledComponents";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
padding: 40px;
align-items: center;

@media(min-width: 1024px){
flex-direction: row;
justify-content: center;
gap: 30px 80px;
}

@media(min-width: 767px) and  (max-width: 1023px){
flex-direction: row;
justify-content: center;
gap: 20px 50px;
}

@media(max-width: 768px){
flex-direction: line;
justify-content: center;
gap: 40px;
}
`
const Header = styled.header` 
background-color:rgb(255, 0, 0);
    padding: 10px;
    color: white;
    text-align: center;

    img{
    width: 250px;
    }

    nav {
    text-align: center;
    color: white;
    width: 99%;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 20px
    }

    nav ul {
        list-style: none;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin: 0 15px;
    }

    nav a{
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
    }

    nav a:hover {
        color: #ffd700;
    }

@media(min-width: 767px) and  (max-width: 1023px){
nav {
font-size: 25px
  }
}

@media(max-width: 768px){
nav {
font-size: 30px
  }
}
`
const Footer = styled.footer`
  position: sticky;  
  background-color:rgb(255, 4, 4);
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  top: 100vh;
  bottom: 0;
  width: 100%;

  @media(min-width: 767px) and  (max-width: 1023px){
font-size: 15px
}

@media(max-width: 768px){
font-size: 20px
}
`

function App() {
  return (
  <>
  <GlobalStyle/>
  <Header>
  <h1 style={{textAlign: 'center', marginTop: '20px' ,marginBottom: '5px'}}>HORTIFRUTI DO</h1>
  <img src="https://www.inova.unicamp.br/wp-content/uploads/2021/05/SENAI-SP.jpg"/>
  <nav>
        <ul>
            <li><a href="#Produtos">Itens</a></li>
            <li><a href="#carrinho">Carrinho</a></li>
            <li><a href="#purchaseForm">Dados</a></li>
        </ul>
  </nav>
  </Header>
  
  <Container>
    <Produto1/>
    <Produto2/>
    <Produto3/>
    <Produto4/>
    <Produto5/>
    <Produto6/>
  </Container>

  <Footer>  
  <p> &copy; Todos os direitos reservados. 2024 - HORTIFRUTI DO SENAI</p>
  </Footer>
  </>
  );
}

export default App;
