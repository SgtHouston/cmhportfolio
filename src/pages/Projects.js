import React from 'react'
import { Link } from 'react-router-dom'
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

export default function Projects() {
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv>
                    PROJECTS
                </TitleDiv>
                <PIDiv>
                    Software Development Projects
                </PIDiv>
                <MoreDiv>
                    Check out some of the projects I've worked on!
                </MoreDiv>
                <ul>
                    <li>
                        <Link to="/projects/42">Project1</Link>
                    </li>
                    <li>
                        <Link to="/projects/1000">Project2</Link>
                    </li>
                    
                </ul>
                <ul>

                </ul>
            </div>
        </Container>
    )
}