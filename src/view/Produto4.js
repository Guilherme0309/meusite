import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    padding: 10px;
    width: 100%;
    max-width: 300px;
    height: 200px;
    text-align: center;
    transition: 0.3s;
&:hover{
    transform: scale(1.05);
}
`

const Img = styled.img`
    width: 75px;
    border-radius: 10px;
`

const Titulo = styled.h2`
    margin: 15px 0;
`

const Texto = styled.p`
    font-size: 16px;
    color: #00000;
    margin: 0 10px
`

export default function Produto4(){
    return(
    <CardContainer>
        <Titulo>Pera</Titulo>
        <Img src="https://static.vecteezy.com/system/resources/previews/015/100/142/non_2x/pear-fruit-transparent-background-free-png.png" alt="imagem sobre algo"/>
        <Texto>R$24,00/Kg</Texto>
    </CardContainer>
    
    )
}