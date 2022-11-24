import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import "./planes.css";

export default class planes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container id="card-container">
        <h2>Selecciona el plan ideal para tu empresa</h2><br></br>
        <Card.Text style={{textAlign: 'left'}}>
                <ul class="custom-4">
                  <li>Nuestros planes estan diseñados para las necesidades
                    de su empresa</li>
                  <li>En cada plan encontraras un limite de pedidios</li>
                  <li>Cada plan tiene un tiempo limite para hacer la recolecion de sus desechos</li>
                  <li>Adquiere Nuestros planes y obtendras grandes beneficios</li>
                </ul><br></br>
        </Card.Text>
        <CardGroup>
          <Card border="warning">
            <Card.Img
              style={{ width: "50%", alignSelf: "center" }}
              variant="top"
              src="https://tradingmundo.com/wp-content/uploads/2021/06/membresia-bronce.png"
            />
            <Card.Body>
              <Card.Title>Amigable</Card.Title>
              <Card.Text style={{textAlign: 'left'}}>
                <ul class="custom-4">
                  <li>120 pedidos por 2 meses</li>
                  <li>Desechos sólidos urbanos</li>
                  <li>Papel, cartón y vidrio</li>
                  <li>Pilas y baterías</li>
                  <li>fecha de recolecion: 4 a 3 dias habiles</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="lg">SUSCRIBIRSE</Button>
            </Card.Footer>
          </Card>
          <Card border="warning">
            <Card.Img
              style={{ width: "50%", alignSelf: "center" }}
              variant="top"
              src="https://toupto.com/wp-content/uploads/2018/08/newSILVER.png"
            />
            <Card.Body>
              <Card.Title>Zona Eco</Card.Title>
              <Card.Text style={{textAlign: 'left'}}>
                <ul class="custom-4">
                  <li>300 pedidos por 5 meses</li>
                  <li>Escombros y residuos de construcción</li>
                  <li>Papel, cartón y vidrio</li>
                  <li>Residuos de Aparatos Eléctricos y Electrónicos</li>
                  <li>fecha de recolecion: 48 horas</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="lg">SUSCRIBIRSE</Button>
            </Card.Footer>
          </Card>

          <Card border="warning">
            <Card.Img
              style={{ width: "50%", alignSelf: "center" }}
              variant="top"
              src="https://toupto.com/wp-content/uploads/2019/02/Gold-Membership.png"
            />
            <Card.Body>
              <Card.Title>EcoPunto</Card.Title>
              <Card.Text style={{textAlign: 'left'}}>
                <ul class="custom-4">
                  <li>800 pedidios 8 por meses</li>
                  <li>Desechos de manejo especial</li>
                  <li>Papel, cartón y vidrio</li>
                  <li>Residuos de Aparatos Eléctricos y Electrónicos</li>
                  <li>fecha de recolecion: 24 horas</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="lg">SUSCRIBIRSE</Button>
            </Card.Footer>
          </Card>

          <Card border="warning">
            <Card.Img
              style={{ width: "50%", alignSelf: "center" }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcJB9s2GEV4Mbw4rHA01NUbdREJFeI-rdeA&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>Bio Soluciones</Card.Title>
              <Card.Text style={{textAlign: 'left'}}>
                <ul class="custom-4">
                  <li>Pedidios ilimitados por 1 año</li>
                  <li>Papel, cartón y vidrio</li>
                  <li>Desechos tecnologicos</li>
                  <li>Desechos peligrosos</li>
                  <li>Desechos radiactivos</li>
                  <li>fecha de recolecion: 6 horas</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="lg">SUSCRIBIRSE</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
