import { Row, Col } from 'react-bootstrap'
import contact from '../img/contact_me.jpg'
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div className="mb-5">

            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>CONTACT</h3>
            </Row>

            <Row>
                <Col>
                    <img src={contact} alt="Space Jorge" style={{ height: "50vh", borderRadius: "100%" }} />
                </Col>
                <Col>
                    <Row>
                        <Col className="contact-name">Jorge Casique</Col>
                    </Row>

                    <Row>
                        <Col className="contact-title">Software Developer</Col>
                    </Row>
                    
                    <Row>
                        <Col lg={3} className="contact-left">LOCATION</Col>
                        <Col className="contact-body">LOS ANGELES, CA</Col>
                    </Row>
                    
                    <Row>
                        <Col lg={3} className="contact-left">E-MAIL</Col>
                        <Col className="contact-body">JCasique@gmail.com</Col>
                    </Row>
                    
                    <Row>
                        <Col lg={3} className="contact-left">PHONE</Col>
                        <Col className="contact-body">(626)775-5537</Col>
                    </Row>
                    
                </Col>
            </Row>

        </div>
    )
}

export default ContactMe