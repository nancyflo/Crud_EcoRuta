import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button} from "react-bootstrap"; //{Row, Col }
import app from '../../app.json';
import './login.css'
import {isNull} from 'util';
import Cookies from 'universal-cookie';
import { calcularExpirarSesion } from "../helper/helper";
import Loading from '../loading/loading';

const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
        usuario:'',
        pass:'',
    };
  }

  iniciarSesion(){
    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) => {
      if (isNull(response.data.token)){
        alert("usuario y/o contraseña incorrecta")
      }
      else{
        cookies.set('_s', response.data.token,
        {
          path: '/',
          expires: calcularExpirarSesion(),
        });
        this.props.history.push(window.open('/empresas'));
      }
      this.setState({ loading: false });
    }) 
    .catch((err) => {
      console.log(err);
      this.setState({ loading: false });
    })  
    
    alert('Botón de Iniciar Sesión');
  }  

  render() {
    return (
      <Row>
        <Col><Container id="login-container" >
        <Loading show={this.state.loading} />
              <Form>
              <h2>Iniciar Sesión</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Usuario</Form.Label>
                  <Form.Control onChange = {(e) => this.setState({ usuario: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control type="password" onChange = {(e) => this.setState({ pass: e.target.value})} />
                </Form.Group>
                <Button
                  
                  
                  onClick={()=>{
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
      </Container>
      </Col>
        <Col>2 of 2</Col>
      </Row>
      
    );
  }
}
     