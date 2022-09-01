import { FaShoppingCart, FaCartArrowDown, FaGamepad, FaUserFriends, FaBook, FaBookReader, FaBookOpen, FaNetworkWired } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InfoWithIconDiv = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='info-icon-div'>
                    {/* Some Things can be placed here llike welcome messages. */}
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}

export default InfoWithIconDiv;