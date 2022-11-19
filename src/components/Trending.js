import {Card, Col, Container, Row, Image} from 'react-bootstrap'
import duneImage from "../assets/image/trending/dune.jpg"
import everythingImage from "../assets/image/trending/everything.jpg"
import infiniteImage from "../assets/image/trending/infinite.jpg"
import jokerImage from "../assets/image/trending/joker.jpg"
import lightyearImage from "../assets/image/trending/lightyear.jpg"
import morbiusImage from "../assets/image/trending/morbius.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-white'> SUPERHERO MOVIES </h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className='image' />
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
                            <Image src={everythingImage} alt="Dune Movies" className='image' />
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
                            <Image src={infiniteImage} alt="Dune Movies" className='image' />
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
                            <Image src={jokerImage} alt="Dune Movies" className='image' />
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
                            <Image src={lightyearImage} alt="Dune Movies" className='image' />
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
                            <Image src={morbiusImage} alt="Dune Movies" className='image' />
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

export default Trending;