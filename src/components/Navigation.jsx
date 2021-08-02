import { Navbar, Nav, Container } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>Jorge.<span style={{ color: "#7F5AF0" }}>Casique</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="col-3 me-5"></Nav>
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="#action1">HOME</Nav.Link>
                        <Nav.Link href="#action2">TECHNOLOGIES</Nav.Link>
                        <Nav.Link href="#action3">PROJECTS</Nav.Link>
                        <Nav.Link href="#action4">ABOUT ME</Nav.Link>
                        <Nav.Link href="#action5">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation