import { Row, Col } from 'react-bootstrap'
import contact from '../img/contact_me.jpg'

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
                        <Col class="contact-name">Jorge Casique</Col>
                    </Row>

                    <Row>
                        <Col class="contact-title">Software Developer</Col>
                    </Row>
                    
                    <Row>
                        <Col class="contact-left">LOCATION</Col>
                        <Col class="contact-body">LOS ANGELES, CA</Col>
                    </Row>
                    
                    <Row>
                        <Col class="contact-left">E-MAIL</Col>
                        <Col class="contact-body">JCASIQUE@gmail.com</Col>
                    </Row>
                    
                    <Row>
                        <Col class="contact-left">PHONE</Col>
                        <Col class="contact-body">(626)775-5537</Col>
                    </Row>
                    
                </Col>
            </Row>

        </div>
    )
}

export default ContactMe