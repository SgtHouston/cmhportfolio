import React from 'react'

// Step 3
import { Container, Nav, Navbar } from 'react-bootstrap'
// Step 4 
import styled from 'styled-components'

const SpacingDiv = styled.div`
    flex-grow: 1;
`;





function Header() {
    return (

        <Navbar sticky="top" bg="danger" variant="dark" id="navbar">
            <Container>
            <Navbar.Brand>
                CH
            </Navbar.Brand>
            <Nav >
                <SpacingDiv className="Spacing-div">
                </SpacingDiv>

                <Nav.Item>
                    <Nav.Link href="/">
                        HOME
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/about">
                        ABOUT ME
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/projects">
                        PROJECTS
                    </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                    <Nav.Link href="/contact">
                        CONTACT
                    </Nav.Link>
                </Nav.Item>

            </ Nav>
            </Container>
        </ Navbar>
    )
}


export default Header
