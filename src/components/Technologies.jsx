import { Row, Col } from 'react-bootstrap'
import { SiPostgresql, SiMongodb, SiReact, SiNodeDotJs, SiPython, SiJavascript, SiGit } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

const Technologies = () => {
    return (
        <div style={{ backgroundColor: "#16161A" }}>
            <div className="container">
                <Row className="text-center" style={{ color: "#94A1B2" }}>
                    <h3 style={{ margin: "50px 0" }}>TECHNOLOGIES</h3>
                </Row>
                <Row xs={2} md={4} className="g-4" style={{ color: "#94A1B2" }}>
                    <Col className="text-center">
                        <SiPostgresql style={{ height: "10vh", width: "10vh", color: "rgb(54, 104, 144)" }} />
                        <h4 className="mt-3">PostgreSQL</h4>
                    </Col>
                    <Col className="text-center">
                        <SiMongodb style={{ height: "10vh", width: "10vh", color: "green" }} />
                        <h4 className="mt-3">MongoDB</h4>
                    </Col>
                    <Col className="text-center">
                        <SiReact style={{ height: "10vh", width: "10vh", color: "rgb(103, 219, 249)" }} />
                        <h4 className="mt-3">React.js</h4>
                    </Col>
                    <Col className="text-center" style={{ marginBottom: "50px" }}>
                        <SiNodeDotJs style={{ height: "10vh", width: "10vh", color: "green" }} />
                        <h4 className="mt-3">Express.js</h4>
                    </Col>
                </Row>
                <Row xs={2} md={4} className="g-4" style={{ color: "#94A1B2" }}>
                    <Col className="text-center">
                        <DiNodejs style={{ height: "10vh", width: "10vh", color: "green" }} />
                        <h4 className="mt-3">Node.js</h4>
                    </Col>
                    <Col className="text-center">
                        <SiPython style={{ height: "10vh", width: "10vh", color: "rgb(54, 104, 144)" }} />
                        <h4 className="mt-3">Python</h4>
                    </Col>
                    <Col className="text-center">
                        <SiJavascript style={{ height: "10vh", width: "10vh", color: "yellow" }} />
                        <h4 className="mt-3">JavaScript</h4>
                    </Col>
                    <Col className="text-center" style={{ marginBottom: "50px" }}>
                        <SiGit style={{ height: "10vh", width: "10vh", color: "rgb(238, 81, 59)" }} />
                        <h4 className="mt-3">Git</h4>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Technologies