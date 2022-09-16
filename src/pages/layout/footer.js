import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FooterDiv = () => {
    return (
        <div className='footer-div'>
        {/* Some Things can be placed here like welcome messages. */}
            <Container className="footer-container">
                <Row>
                    <Col sm='6' md='4' lg='4'>
                        <div>
                            <h2> Net-Zone</h2>
                        </div>
                    </Col>
                    <Col sm='6' md='4' lg='4'>
                        <div>
                            <h2> Net-Zone</h2>
                        </div>
                    </Col>
                    <Col sm='12' md='4' lg='4'>
                        <div>
                            <h2> Net-Zone</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        &copy; Energy Ransoms Limited.
                    </div>
                </Row>
            </Container>

        </div>
        
    )
}

export default FooterDiv;