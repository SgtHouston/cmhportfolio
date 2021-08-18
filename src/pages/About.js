import React from 'react'
// Step 3
import { Container } from 'react-bootstrap'
// Step 4 
import styled from 'styled-components'



const TitleDiv = styled.div`
    padding-top: 2rem;
    font-size: 2rem;
    color: #D11F36;
`;

const AboutDiv = styled.div`
    font-size: 3rem;
`;

const MoreDiv = styled.div`
    font-size: 1rem;
    color: #D11F36;
`;






export default function About() {
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    ABOUT
                </TitleDiv>
                <AboutDiv>
                    Personal Info
                </AboutDiv>
                <MoreDiv>
                    Get To Know More About Me
                </MoreDiv>


                
            </div>
        </Container>
    )
}

