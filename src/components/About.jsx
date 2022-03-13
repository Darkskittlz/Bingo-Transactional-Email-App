import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../App.css'
import { Row, Col } from 'antd';
import { Images } from '../constants/constants';


const Container = styled.div`
    padding: 5px;
    width: 420px;
    height: 200px;
    margin-bottom: 20px;
    margin-left: 25%;

    @media screen and (max-width:900px){
        margin-left: 1%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

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

        @media screen and (max-width:900px){
            font-size: 60px;
            padding: 20px;
        }
    }
`

const Container2 = styled.div`
    padding: 20px;
    width: 800px;
    /* backdrop-filter: blur(10px); */
    border: 2px solid black;
    border-radius: 10px;
    background-color: #ffffff6a;

    h1 {
        font-size: 30px;

        @media screen and (max-width:900px){
            text-align: center;
            font-size: 35px;
        }
    }

    @media screen and (max-width:900px){
        width: 350px;
        padding: 0px;
        padding-bottom: 10px;
    }

`

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    grid-gap: 10px;
    justify-content: center;

    img {
        height: 350px;

        @media (max-width: 860px){
            display: flex;
            height: 200px;
            margin: 0px auto;
            flex-direction: column;
            justfiy-content: center;
        }
    }
    
    @media (max-width: 860px){
        display: flex;
        flex-direction: column;
    }
`


const About = (props) => {

    return (
        <div id='homeBody'>
            <Row gutter={24} style={{
                display: 'flex', 
                width: '100%', 
                justifyContent: 'center' 
            }}>
                <Col xl={12}>                
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
                </Col>
            </Row>
        </div>
    )
}

export default About