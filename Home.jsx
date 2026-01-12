import data from "../data/home.json"
import { Container, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <Container className="mt-4">
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <p>{data.welcomeText}</p>

      <Carousel>
        {data.heroImages.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={img}
              alt={"slide " + (i + 1)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Button as={Link} to={data.cta.link} className="mt-3">
        {data.cta.text}
      </Button>
    </Container>
  )
}
