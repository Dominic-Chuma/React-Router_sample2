import { FaCartArrowDown, FaGamepad, FaUserFriends, FaSuitcaseRolling, FaHandshake, FaLaptopCode } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InfoWithIconDiv = () => {
    return (
        <Container>
            <Row>
                {/* Column 1. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaCartArrowDown className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Shopping</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column 2. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaGamepad className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Gaming.</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column 3. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaUserFriends className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Friendship & Networking</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column 4. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaLaptopCode className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Learning..</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column 4. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaHandshake className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hiring & Recruitment</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column 4. */}
                <Col sm='6' md='4' lg='4'>
                    {/* <div className='info-icon-div'> */}
                    {/* Some Things can be placed here llike welcome messages. */}
                    {/* </div>  */}
                    <Card border="light" >
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Title> <FaSuitcaseRolling className="font-icons" /> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Travel</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default InfoWithIconDiv;