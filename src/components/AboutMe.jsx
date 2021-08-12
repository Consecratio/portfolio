import { Row, Col } from 'react-bootstrap'
import '../css/AboutMe.css'

const AboutMe = () => {
    return (
        <div id="about-me" style={{ backgroundColor: "#16161A" }}>
            <div className="container">

                <Row className="text-center" style={{ color: "#94A1B2" }}>
                    <h3 style={{ margin: "50px 0" }}>ABOUT ME</h3>
                </Row>

                <Row>
                    <Col>
                        <p className="about-me-text text-center mb-5">
                            I am a Software Engineer with 5 years experience in design, management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack MERN/PERN (MongoDB, PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="about-me-text text-center mb-5">
                            In my free time I enjoy hanging out with my friends, playing video games, Dungeons And Dragons, Magic The Gathering. On the weekends it's possible you will find me either at a Sushi restaurant, or Dim Sum restaurant, and then at a friends house getting ready to play Commander or finish our Dragon Heist campaign.
                        </p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default AboutMe