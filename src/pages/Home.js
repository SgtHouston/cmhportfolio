import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'


const TitleDiv = styled.div`
    padding-top: 2rem;
    font-size: 2rem;
    color: #D11F36;
`;

const PIDiv = styled.div`
    font-size: 3rem;
`;

const MoreDiv = styled.div`
    font-size: 1rem;
    color: #D11F36;
`;

export default function Home() {
    
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    HOME
                </TitleDiv>
                <PIDiv>
                    My Home Page
                </PIDiv>
                <MoreDiv>
                    Welcome To My Portfolio!
                </MoreDiv>
                
            </div>
        </Container>
    )
}