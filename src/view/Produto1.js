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
    width: 80px;
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

export default function Produto1(){
    return(
    <CardContainer>
        <Titulo>Banana</Titulo>
        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/1200px-Banana.png" alt="imagem sobre algo"/>
        <Texto>R$ 7,98 /Kg</Texto>
    </CardContainer>
    
    )
}