import { Row, Col } from "react-bootstrap"
import myPhoto from '../img/me.jpeg'
import './Jumbotron.css'
import { BsArrowDown } from 'react-icons/bs'

const Jumbotron = () => {
    return (
        <div id="home" className="jumbotron" style={{ minHeight: "75vh", marginTop: "25vh" }}>
            <Row xs={1} md={1} lg={2} >
                <Col className="mb-5 slide" >
                    <h1 className="display-6" style={{ fontWeight: "900" }} >FULLSTACK ENGINEER</h1>
                    <h1 className="display-6" style={{ fontWeight: "900" }} >READY TO MAKE AN IMPACT</h1>
                    <p className="lead" >Specializing in Full-Stack development utilizing technologies like: MongoDB, Express.js, React.js, Node.js</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#home" >Learn more</a>
                </Col>
                <Col lg={{ span: 3, offset: 2 }} className="mb-5" >
                    <img src={myPhoto} alt="Jorge Casique" style={{ height: "60vh" }} className="mx-auto d-block my-photo" />
                </Col>
                <div id="jumbo-div" ></div>
            </Row>
            <BsArrowDown id="down-arrow" />
        </div>
    )
}

export default Jumbotron