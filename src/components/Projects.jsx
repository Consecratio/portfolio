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

            <Row xs={1} sm={1} md={1} lg={2} className="align-items-center projects-row" >
                <Col>
                    <img id="viberant" src={viberant} alt="Viberant" />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">Viberant</h3>
                    <p className="tech-stack">MongoDB + Express.js + React.js + Node.js + Mongoose + Axios + REST API + Bootstrap</p>
                    <p className="project-desc">Viberant is a collaboration project between Designers and Developers to allow users to post events they would like to do in their area, and join events you are interested in.</p>
                    <a href="https://admiring-spence-c2dab0.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/Viberant-client" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

            <Row xs={1} sm={1} md={1} lg={2} className="align-items-center flex-row-reverse projects-row" >
                <Col>
                    <img id="spellbook" src={spellbook} alt="Spellbook" />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">SpellBook</h3>
                    <p className="tech-stack">PostgreSQL + Express.js + EJS + Node.js + Sequelize + Axios + REST API + Bootstrap</p>
                    <p className="project-desc">Spellbook allows players of Dungeons &amp; Dragons 5e to create custom spell books with spells aggregated from the <a href="http://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer">DND5e API</a>.</p>
                    <a href="https://spellbook-project.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/project-2-spellbook" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

            <Row xs={1} sm={1} md={1} lg={2} className="align-items-center projects-row" >
                <Col>
                    <img id="chat-app" src={chatApp} alt="Chat App" />
                </Col>
                <Col className="mx-auto">
                    <h3 className="project-name">Chat App</h3>
                    <p className="tech-stack">Express.js + React.js + Node.js + Socket.io + Bootstrap</p>
                    <p className="project-desc">Chat App allows users to pick a username upon entering, and start messaging with other users also connected in a real-time chat environment</p>
                    <a href="https://practical-visvesvaraya-c80ca0.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-links">Live Site</a>
                    <br />
                    <a href="https://github.com/Consecratio/chat-app-client" target="_blank" rel="noopener noreferrer" className="project-links">Github</a>
                </Col>
            </Row>

        </div>
    )
}

export default Projects