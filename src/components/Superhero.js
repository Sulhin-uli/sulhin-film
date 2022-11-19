import {Card, Col, Container, Row, Image} from 'react-bootstrap'
import antmanImage from "../assets/image/superhero/antman.jpg"
import avengerImage from "../assets/image/superhero/avenger.jpg"
import batmanImage from "../assets/image/superhero/batman.jpg"
import robinhoodImage from "../assets/image/superhero/robinhood.jpg"
import spidermanImage from "../assets/image/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/image/superhero/superman.jpg"


const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-white'> SUPERHERO MOVIES </h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper' id='superHero'>
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Dune Movies" className='image' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero;