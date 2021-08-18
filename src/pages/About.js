import React from 'react'
// Step 3
import { Container } from 'react-bootstrap'
// Step 4 
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





export default function About() {
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    ABOUT
                </TitleDiv>
                <SubtitleDiv>
                    Personal Info
                </SubtitleDiv>
                <MoreDiv>
                    Get To Know More About Me
                </MoreDiv>
                
                <TextDiv>

                </TextDiv>


                
            </div>
        </Container>
    )
}

