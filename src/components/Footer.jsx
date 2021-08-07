import { Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { GoMailRead } from 'react-icons/go'
import Resume from '../misc/Jorge_Casique_Resume.pdf'
import './Footer.css'

const Footer = () => {
    return (
        <div id="footer" style={{ backgroundColor: "#16161A" }}>
            <div className="container">

                <Row xs="auto" className="text-center justify-content-center" style={{ color: "#94A1B2", paddingTop: "5vh", paddingBottom: "2vh" }}>
                    <Col>
                        <a href="https://www.linkedin.com/in/jorge-casique/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ height: "3vh", width: "3vw", margin: "1vh 2vw" }} />
                        </a>
                        <p>LinkedIn</p>
                    </Col>
                    <Col>
                        <a href="https://github.com/Consecratio" target="_blank" rel="noopener noreferrer">
                            <SiGithub style={{ height: "3vh", width: "3vw", margin: "1vh 2vw" }} />
                        </a>
                        <p>GitHub</p>
                    </Col>
                    <Col>
                        <a href="mailto:jcasique@gmail.com" target="_blank" rel="noopener noreferrer">
                            <GoMailRead style={{ height: "3vh", width: "3vw", margin: "1vh 2vw" }} />
                        </a>
                        <p>E-Mail</p>
                    </Col>
                    <Col>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <FaFilePdf style={{ height: "3vh", width: "3vw", margin: "1vh 2vw" }} />
                        </a>
                        <p>PDF</p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Footer