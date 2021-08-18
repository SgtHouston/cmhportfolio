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

export default function About() {
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    CONTACT ME
                </TitleDiv>
                <PIDiv>
                    Feel Free To Reach Out
                </PIDiv>
                <MoreDiv>
                    Whether It's A Project, Question, or Opportunity, I'd Love To Hear From You ... Let's Chat!
                </MoreDiv>
                
            </div>
        </Container>
    )
}