import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Timer from "../Sub-components/Divs/time";

// Import all the react-icons for the footer


const FooterDiv = () => {
    return (
        <div className='footer-div'>
        {/* Some Things can be placed here like welcome messages. */}
            <Container className="footer-container">
                <Row>
                    <Col sm='6' md='4' lg='4'>
                        <div>
                            <h2> Net-Zone</h2>
                            <p> The very place to be....</p>
                            <p> Call on </p>
                        </div>
                    </Col>
                    <Col sm='6' md='6' lg='6'>
                        <Row>
                            <Col>
                                <div>
                                    <h4> Products</h4>
                                    <p>Game-zone</p>
                                    <p>ProductHub</p>
                                    <p>Tether-zone</p>
                                    <p>Wit-zone</p>
                                    <p>TalentHub</p>
                                    <p>Fly-zone</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h4> More</h4>
                                    <p>Blog</p>
                                    <p>Privacy</p>
                                    <p>Terms & Conditions</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md='2' lg='2'>
                        <div>
                            <h4> Net-Zone</h4>
                        </div>
                    </Col>
                </Row>
                {/* <hr/> */}
                <Row>
                    <div>
                        &copy; Energy Ransoms Limited, <strong>(</strong>2022<strong>)</strong> Time: <Timer/>
                    </div>
                </Row>
                {/* <hr/> */}
            </Container>

        </div>
        
    )
}

export default FooterDiv;