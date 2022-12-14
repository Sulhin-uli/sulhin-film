import { Button, Col, Container, Row } from "react-bootstrap"

const Intro = () => {
    return  (
        <div className='intro'>
            <Container className='text-white d-flex text-center justify-content-center align-items-center'>
            <Row>
                <Col>
                    <div className='title'> TIDAK SEBURUK PIKIRANMU !</div>
                    <div className='title'> LAKUKAN DAN PENUHI</div>
                    <div className='introButton mt-4 text-center'>
                        <Button variant="dark">Lihat Semua List </Button>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Intro;