import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Indubitably from '../components/Indubitably.png'
import EQTracker from '../components/EQTracker.png'
import DimensionalDefender from '../components/DimensionalDefender.png'






const TitleDiv = styled.div`
    padding-top: 5rem;
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

const TextDiv = styled.div`
    margin-top: 3vh;
    font-size: 1.5rem;
    padding: 3vw;
`;

export default function Projects() {
    
    return (
        <Container className="my-3 text-center">
            <div>
                <TitleDiv >
                    PROJECTS
                </TitleDiv>
                <PIDiv>
                    Software Development Projects
                </PIDiv>
                <MoreDiv>
                    Check out some of the projects I've worked on!
                </MoreDiv>
            </div>

            <br />
            <br />
            
            <Row >
                <Col>
                    <TextDiv>
                        <p>
                            Indubitably | Job Search App | Node.js, HTML, CSS, PostgreSQL, Npm
                        </p>
                        <p>
                            •	Member of a 4-person development team building a job search application inspired by Indeed.com that allows the user to search for jobs by title and/or location, in addition to saving jobs as favorites
                        </p>
                        <p>
                            •	Responsibilities: Node.js Views/Partials based on login status, homepage route, designed mobile-responsive layout, README file, and database model association
                        </p>
                    </TextDiv>
                </Col>
                <Col >
                    <Card style={{ width: '40rem', padding: '1rem' }} border="danger">
                        <Card.Img variant="top" src={Indubitably} className="img-fluid" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '1rem' }}>Indubitably</Card.Title>
                            <Card.Text style={{ fontSize: '1rem' }}>
                                Indeed.com-inspired Job Search Application
                            </Card.Text>
                            <Button variant="danger">View Live</Button><br />
                            <br />
                            <Button variant="danger">GitHub README</Button><br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <br />
            <br />

            <Row >
                <Col >
                    <Card style={{ width: '40rem', padding: '1rem' }} border="danger">
                        <Card.Img variant="top" src={EQTracker} />
                        <Card.Body>
                            <Card.Title>Earthquake Tracker</Card.Title>
                            <Card.Text>
                                Global Seismic Activity Tracking App 
                            </Card.Text>
                            <Button variant="danger" href="https://earthquake-tracker.netlify.app">View Live</Button><br />
                            <br />
                            <Button variant="danger" href="https://github.com/rrr5458/earthquake">GitHub README</Button><br />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <TextDiv>
                        <p>
                            Earthquake Tracker | Global Seismic Activity Tracking App | JavaScript, HTML, CSS, REST API
                        </p>
                        <p>
                            •	Member of a 4-person development team building an earthquake tracker that allows the user to visualize and obtain info about the 60 most recent earthquakes worldwide
                        </p>
                        <p>
                            •	Responsibilities: Designed mobile-responsive layout, rendered earthquake data from API w/ JS, and the README file

                        </p>
                    </TextDiv>
                </Col>
            </Row>

            <br />
            <br />

            <Row >
                
                <Col>
                    <TextDiv>
                        <p>
                        Dimensional Defender | Arcade-Style Space Shooter Game | Python, JSON 
                        </p>
                        <p>
                            •	Solo development of an arcade game using the Pygame library w/ JSON to save high score data
                        </p>
                        <p>
                            •	Learned Pygame library through self-study to build a project using technologies outside of course scope
                        </p>
                    </TextDiv>
                </Col>
                <Col >
                    <Card style={{ width: '40rem', padding: '1rem' }} border="danger">
                        <Card.Img variant="top" src={DimensionalDefender} />
                        <Card.Body>
                            <Card.Title>Dimensional Defender</Card.Title>
                            <Card.Text>
                                Arcade-Style Space Shooter Game 
                            </Card.Text>
                            <Button variant="danger" href="https://github.com/SgtHouston/DCProject1Python">GitHub README/Video</Button><br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <br />
            <br />
            
        </Container>
    )
}