import salesData from "../data/sales.json"
import productsData from "../data/products.json"
import { Container, Card, Row, Col } from "react-bootstrap"

export default function Sales() {
  return (
    <Container className="mt-4">
      {salesData.sales.map((sale, i) => (
        <Card key={i} className="mb-4">
          <Card.Body>
            <Card.Title>{sale.title}</Card.Title>
            <Card.Text>{sale.description}</Card.Text>
            <p>Érvényes: {sale.validUntil}</p>
            <Row>
              {sale.productIds.map((id) => {
                const product = productsData.products.find((p) => p.id === id)
                return product ? (
                  <Col key={id} xs={12} md={6} lg={4} className="mb-3">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`/images/products/${id}.jpg`}
                        alt={product.name}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <p>Ár: {product.price} Ft</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ) : null
              })}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}
