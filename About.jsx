import data from "../data/about.json"
import { Container, Row, Col } from "react-bootstrap"

export default function About() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
          <h2>{data.companyName}</h2>
          <p>Alapítva: {data.founded}</p>
          <p>{data.description}</p>
          <p><strong>Küldetés:</strong> {data.mission}</p>
          <div>
            <strong>Értékeink:</strong>
            <ul>
              {data.values.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img src={data.logo} alt="Cég logó" className="img-fluid mb-3" style={{maxHeight: 100}} />
          <img src={data.heroImage} alt="Bemutató kép" className="img-fluid rounded shadow" />
        </Col>
      </Row>
      <h4 className="mt-4">Kapcsolat</h4>
      <p>Email: {data.contact.email}</p>
      <p>Telefon: {data.contact.phone}</p>
      <p>Cím: {data.contact.address}</p>
    </Container>
  )
}
