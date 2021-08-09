import { Row, Col } from 'react-bootstrap'
import contact from '../img/contact_me.jpg'
import '../css/ContactMe.css'

const ContactMe = () => {
    return (
        <div id="contact" className="mb-5">

            <Row className="text-center" style={{ color: "#94A1B2" }}>
                <h3 style={{ margin: "50px 0" }}>CONTACT</h3>
            </Row>

            <Row className="align-items-center">
                <Col lg={6}>
                    <img id="space-jorge" src={contact} alt="Space Jorge" />
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
                        <Col className="contact-body"><a href="mailto:jcasique@gmail.com" target="_blank" rel="noopener noreferrer">JCasique@gmail.com</a></Col>
                    </Row>
                    
                    <Row>
                        <Col lg={3} className="contact-left">PHONE</Col>
                        <Col className="contact-body"><a href="tel:+16267755537">(626)775-5537</a></Col>
                    </Row>
                    
                </Col>
            </Row>

        </div>
    )
}

export default ContactMe