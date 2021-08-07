import { Row, Col } from 'react-bootstrap'
import viberant from '../img/viberant.png'
import spellbook from '../img/spellbook.png'
import chatApp from '../img/chat_app.png'
import '../css/Projects.css'

const Projects = () => {
    return (
        <div id="projects" className="container">

            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>PROJECTS</h3>
            </Row>

            <Row lg={2} className="align-items-center projects-row" >
                <Col>
                    <img src={viberant} alt="Viberant" style={{ height: "100%", maxWidth: "100%", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">Viberant</h3>
                    <p className="tech-stack">MongoDB + Express.js + React.js + Node.js + Mongoose + Axios + REST API + Bootstrap</p>
                    <a href="https://admiring-spence-c2dab0.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/mern-auth-client" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

            <Row lg={2} className="align-items-center flex-row-reverse projects-row" >
                <Col>
                    <img src={spellbook} alt="Spellbook" style={{ maxHeight: "50vh", maxWidth: "100%", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">SpellBook</h3>
                    <p className="tech-stack">PostgreSQL + Express.js + EJS + Node.js + Sequelize + Axios + REST API + Bootstrap</p>
                    <a href="https://spellbook-project.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/project-2-spellbook" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

            <Row lg={2} className="align-items-center projects-row" >
                <Col>
                    <img src={chatApp} alt="Chat App" style={{ height: "50vh", margin: "0 auto", display: "block" }} />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">Chat App</h3>
                    <p className="tech-stack">Express.js + React.js + Node.js + Socket.io + Bootstrap</p>
                    <a href="https://practical-visvesvaraya-c80ca0.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/chat-app-client" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

        </div>
    )
}

export default Projects