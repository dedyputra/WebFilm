import { Card, Container, Row, Col, Image } from "react-bootstrap"
import alenaImage from "../assets/img/trending/alena.jpeg"

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className="text-dark text-center movieImage">
              <Image src={alenaImage} alt="Alena Movie" />
              <Card.Title>ALENA Kuy</Card.Title>
              <Card.Text>
              </Card.Text>
              <Card.Text></Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );

}

export default Trending 