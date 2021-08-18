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


export default function About() {
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    CONTACT ME
                </TitleDiv>
                <SubtitleDiv>
                    Feel Free To Reach Out
                </SubtitleDiv>
                <MoreDiv>
                    Whether It's A Project, Question, or Opportunity, I'd Love To Hear From You ... Let's Chat!
                </MoreDiv>

                <TextDiv>

                </TextDiv>
                
            </div>
        </Container>
    )
}