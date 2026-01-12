import { Card } from "react-bootstrap"

export default function ProductCard({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={`/images/products/${product.id}.jpg`} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <strong>{product.price} Ft</strong>
        {product.onSale && (
          <div className="text-danger">AKCIÓ! {product.discountPercent > 0 && (<span>-{product.discountPercent}%</span>)}</div>
        )}
      </Card.Body>
    </Card>
  )
}
