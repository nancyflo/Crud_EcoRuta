import React from "react";
import { Row, Col } from "react-bootstrap";

export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    
  }
  render() {
    const divStyles ={background: "pink", marginTop: 20};
    const divStyles1 ={background: "blue", marginTop: 20};
    return (
      <Row>
        <Col>
          <h1 style={divStyles}> BIENVENIDO A ECORUTA</h1>
          <h2 style={divStyles1}> Solicita la recolección de los desechos contaminantes y reciclables</h2>
          <h2 style={divStyles1}> de tu empresa. </h2>
          <h2 style={divStyles1}> Para darles el mejor tratamiento y no contaminar el medio ambiente </h2>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    );
  }
}
