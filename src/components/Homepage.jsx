import React from "react";
import styled from 'styled-components';
import '../App.css';
import '../Styles/homepage.scss';
import Subscribe from './Subscribe';
import { Row, Col } from 'antd';

const Container = styled.div`
    padding: 20px;
    display: flex;

    @media screen and (max-width:900px){
        margin-left: 1%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 85px;
        padding: 10px;
        font-family: 'Raleway', cursive;
        backdrop-filter: blur(10px);
        background-color: #ffffff6a;
        border: 2px solid black;
        border-radius: 10px;
        text-align: center;

        @media screen and (max-width:900px){
            font-size: 60px;
            padding: 20px;
        }
    }
`

const TitleContainer = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
`

const Container2 = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #ffffff6a;

    h1 {
        font-size: 30px;
        text-align: center;
    }

`


const Homepage = (props) => {
    return (
        <>
            <div id='homeBody'>
                <Row gutter={24} style={{
                        display: 'flex', 
                        width: '100%', 
                        justifyContent: 'center' 
                        }}>
                    <Col xl={12}>
                        <TitleContainer>
                            <Container>
                                <h1>BingoApp</h1>
                            </Container>
                        </TitleContainer>
                        <Container2>
                            {/* <h1>Email Form</h1> */}
                            <Subscribe />
                        </Container2>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Homepage