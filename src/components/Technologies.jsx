import { Row, Col, Card } from 'react-bootstrap'

const Technologies = () => {
    return (
        <div style={{ backgroundColor: "#16161A" }}>
            <div className="container">
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    )
}

export default Technologies