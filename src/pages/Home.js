import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'


const TitleDiv = styled.div`
    padding-top: 3rem;
    font-size: 2rem;
    color: #D11F36;
`;

const SubtitleDiv = styled.div`
    font-size: 3rem;
`;

const MoreDiv = styled.div`
    font-size: 1rem;
    color: #D11F36;
`;

const TextDiv = styled.div`
    font-size: 2vw;
    padding: 5vw;
`;


export default function Home() {
    
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    HOME
                </TitleDiv>
                <SubtitleDiv>
                    My Home Page
                </SubtitleDiv>
                <MoreDiv>
                    Welcome To My Portfolio!
                </MoreDiv>
                <TextDiv>

                </TextDiv>
                
            </div>
        </Container>
    )
}