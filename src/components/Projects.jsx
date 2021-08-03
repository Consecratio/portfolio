import { Row, Col } from 'react-bootstrap'
import viberant from '../img/viberant.png'

const Projects = () => {
    return (
        <div className="container">
            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>PROJECTS</h3>
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
        </div>
    )
}

export default Projects