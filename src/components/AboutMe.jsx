import { Row, Col } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id="about-me" style={{ backgroundColor: "#16161A" }}>
            <div className="container">

                <Row className="text-center" style={{ color: "#94A1B2" }}>
                    <h3 style={{ margin: "50px 0" }}>About Me</h3>
                </Row>

                <Row>
                    <Col>
                        <p className="about-me-text text-center">
                            I am a Software Engineer with 5 years experience in design, management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack MERN/PERN (MongoDB, PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs.
                        </p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default AboutMe