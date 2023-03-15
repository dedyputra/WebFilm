import { Card, Container, Row, Col, Image } from "react-bootstrap"
import alenaImage from "../assets/img/trending/alena.jpeg"

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className="text-dark text-center MovieImage">
              <Image src={alenaImage} alt="Alena Movie" />
              <Card.Title>ALENA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );

}

export default Trending 