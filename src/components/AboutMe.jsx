import { Row, Col } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div id="technologies" style={{ backgroundColor: "#16161A" }}>
            <div className="container">
                <Row>
                    <Col>
                    {
                        'I am a Software Engineer with 5 years experience in design, management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack JavaScript (PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs.'
                    }
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutMe