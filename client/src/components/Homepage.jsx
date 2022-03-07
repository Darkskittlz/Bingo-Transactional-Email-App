import React, { useState } from "react";
import styled from 'styled-components';
import '../App.css';
import '../Styles/homepage.scss';
import Subscribe from './Subscribe';


const GridContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.div`
    padding: 20px;
    margin-left: 24%;
    width: 480px;

    h1 {
        font-size: 85px;
        font-family: 'Raleway', cursive;
        backdrop-filter: blur(10px);
        background-color: #ffffff6a;
        border: 2px solid black;
        border-radius: 10px;
        text-align: center;
    }
`

const Container2 = styled.div`
    padding: 20px;
    margin-left: 14%;
    width: 800px;
    height: 100%;
    /* backdrop-filter: blur(10px); */
    border: 2px solid black;
    border-radius: 10px;
    background-color: #ffffff6a;

    h1 {
        font-size: 30px;
    }
`


const Homepage = (props) => {

    return (
        <>
            <div id='homeBody'>
                <GridContainer>
                    <Container>
                        <h1>BingoApp</h1>
                    </Container>
                    <Container2>
                        <h1>Email Form</h1>
                        <Subscribe />
                    </Container2>
                </GridContainer>
            </div>
        </>
    )
};

export default Homepage