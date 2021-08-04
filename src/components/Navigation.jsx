import { Navbar, Nav, Container } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: "white" }}>
            <Container>
                <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>Jorge.<span style={{ color: "#7F5AF0" }}>Casique</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="col-lg-2 me-5"></Nav>
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    >
                        <Nav.Link href="#top">HOME</Nav.Link>
                        <Nav.Link href="#technologies">TECHNOLOGIES</Nav.Link>
                        <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link href="#action4">ABOUT ME</Nav.Link>
                        <Nav.Link href="#action5">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation