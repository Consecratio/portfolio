import { Row, Col } from 'react-bootstrap'
import viberant from '../img/viberant.png'
import spellbook from '../img/spellbook.png'
import chatApp from '../img/chat_app.png'

const Projects = () => {
    return (
        <div id="projects" className="container">
            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>PROJECTS</h3>
            </Row>
            <Row lg={2} className="align-items-center" >
                <Col>
                    <img src={viberant} alt="Viberant" style={{ height: "100%", maxWidth: "100%", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto text-center">
                    <h3>Viberant</h3>
                    <h4>Description</h4>
                </Col>
            </Row>
            <Row lg={2} className="align-items-center flex-row-reverse" >
                <Col>
                    <img src={spellbook} alt="Spellbook" style={{ maxHeight: "50vh", maxWidth: "100%", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto text-center">
                    <h3>SpellBook</h3>
                    <h4>Description</h4>
                </Col>
            </Row>
            <Row lg={2} className="align-items-center" >
                <Col>
                    <img src={chatApp} alt="Chat App" style={{ height: "50vh", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto text-center">
                    <h3>Chat App</h3>
                    <h4>Description</h4>
                </Col>
            </Row>
        </div>
    )
}

export default Projects