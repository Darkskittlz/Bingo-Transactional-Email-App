import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../App.css'
import { Images } from '../constants/constants';

const GridContainer = styled.div`
    width: 100%;
    height: 43%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.div`
    padding: 5px;
    margin-left: 27%;
    width: 420px;
    height: 200px;
    margin-bottom: 20px;

    h1 {
        font-size: 75px;
        font-family: 'Raleway', cursive;
        backdrop-filter: blur(10px);
        background-color: #ffffff6a;
        border: 2px solid black;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 0;
        margin-top: 16%;
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

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    grid-gap: 10px;
    justify-content: center;

    img {
        height: 350px;
    }

    
    @media (max-width: 860px){
        display: flex;
        flex-direction: column;
        img {
            display: flex;
            flex-direction: column;
        }
    }
`


const About = (props) => {

    return (
        <div id='homeBody'>
            <GridContainer>
                <Container>
                    <h1>About</h1>
                </Container>
                <Container2>
                    <h1>Bingo Cards</h1>
                    <ImgContainer>
                        {Images.map((Image, index) => (
                            <div key={index}>
                                <img src={Image.url} />
                            </div>
                        ))}
                    </ImgContainer>
                </Container2>
            </GridContainer>
        </div>
    )
}

export default About