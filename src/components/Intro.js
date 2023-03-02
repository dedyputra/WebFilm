import { Container, Row, Col, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WELCOME DEDYMOVIE</div>
            <div className="title">NONTON FILM FREE SAMBIL REBAHAN</div>
            <div className="Button mt-4 text-center">
              <Button variant="dark">LIHAT SEMUA LIST FILM</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro