import { Row, Col } from 'react-bootstrap'
import viberant from '../img/viberant.png'
import spellbook from '../img/spellbook.png'
import chatApp from '../img/chat_app.png'

const Projects = () => {
    return (
        <div className="container">
            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>PROJECTS</h3>
            </Row>
            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <Col lg={8} className="offset-lg-2">
                    <p style={{ margin: "50px 0" }}>
                        {"I am a Software Engineer with 5 years experience in design, management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack development utilizing technologies like: HTML, CSS, JavaScript (PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs."}
                    </p>
                </Col>
            </Row>
            <Row lg={2} className="align-items-center" >
                <Col>
                    <img src={viberant} alt="Viberant" style={{ height: "50vh", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto text-center">
                    <h3>Viberant</h3>
                    <h4>Description</h4>
                </Col>
            </Row>
            <Row lg={2} className="align-items-center flex-row-reverse" >
                <Col>
                    <img src={spellbook} alt="Viberant" style={{ height: "50vh", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto text-center">
                    <h3>SpellBook</h3>
                    <h4>Description</h4>
                </Col>
            </Row>
            <Row lg={2} className="align-items-center" >
                <Col>
                    <img src={chatApp} alt="Viberant" style={{ height: "50vh", margin: "0 auto", display: "block" }} />
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