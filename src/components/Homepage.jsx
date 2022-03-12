import React from "react";
import styled from 'styled-components';
import '../App.css';
import '../Styles/homepage.scss';
import Subscribe from './Subscribe';
import { Row, Col } from 'antd';

const Container = styled.div`
    padding: 20px;
    width: 580px;
    display: block;
    margin-left: 14%;

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
    width: 800px;
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
                        <Container>
                            <h1>BingoApp</h1>
                        </Container>
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