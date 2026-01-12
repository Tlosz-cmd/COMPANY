import data from "../data/products.json"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard"

export default function Products() {
  return (
    <Container className="mt-4">
      <Row>
        {data.products.map(p => (
          <Col md={3} sm={6} key={p.id} className="mb-4">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
