import React from "react";
import { Container, Row} from "react-bootstrap";
import { request } from "../helper/helper";
import "./empresas.css";
import DataGrid from '../grid/grid'

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "razon_social",
    text: "Razon Social",
  },
  {
    dataField: "nit",
    text: "Nit",
  },
  {
    dataField: "rut",
    text: "Rut",
  },
  {
    dataField: "telefono",
    text: " Telefono",
  },
  {
    dataField: "mail",
    text: "Correo Electronico",
  },
  {
    dataField: "direccion",
    text: " Direccion",
  },
];


export default class EmpresasBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    
    return (
      <Container id="empresas-buscar-container">
        <Row>
          <h1>Consultar empresas registradas</h1>
        </Row>
        <Row>
        <DataGrid url="/empresas" columns={ columns }/>
        </Row>
      </Container>
    );
  }
}