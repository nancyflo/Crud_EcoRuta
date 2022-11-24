import React from "react";
import { Container, Form, Button, Row, Col} from "react-bootstrap";
import './registro.css';

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            razon_social: "",
            nit: "",
            rut: "",
            telefono: "",
            mail: "",
            direccion: "",
    };
  }

  registro() {
    alert(`razon_social:${this.state.razon_social}, nit:${this.state.nit}, rut:${this.state.rut}, telefono:${this.state.telefono}, mail:${this.state.mail}, direccion:${this.state.direccion}`);
  }

  render() {
    return (
      <Row>
        <Col>
        <Container id="login-container" >
              <Form>
              <h2>Haz tu registro</h2>
              <h3>para acceder a nuestros planes</h3>
                <Form.Group className="mb-3" controlId="formBasicRazon_social">
                  <Form.Label >Razon social</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ razon_social: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNit">
                  <Form.Label >Nit</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ nit: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                  <Form.Label >Rut</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ rut: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefonp">
                  <Form.Label >Telefono</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ telefono: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMail">
                  <Form.Label >Correo </Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ mail: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                  <Form.Label >Direccion</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ direccion: e.target.value})} />
                </Form.Group>
                <Button
                  variant="primary"
                  
                  onClick={()=>{
                    this.registro();
                  }}
                >
                  Registrate
                </Button>
              </Form>
      </Container> 
        </Col>
        <Col style={{ 
      backgroundImage: `url("https://img.freepik.com/vector-gratis/ilustracion-concepto-aplicaciones-moviles_114360-690.jpg?w=740&t=st=1668384684~exp=1668385284~hmac=2045199ffbc672b8b467719ce4321d032c9b7a9190697754a4aa9e714e826b63")` 
    }}>
        </Col>
      </Row>
      
    );
  }
}