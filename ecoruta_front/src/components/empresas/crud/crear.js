import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";

export default class EmpresasCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: "",
                show: false,
            },
            loading: false,
            empleado: {
                razon_social: "",
                nit: "",
                rut: "",
                telefono: "",
                mail: "",
                direccion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }
    
    
    setValue(inicioe, value) {
        this.setState({
            empresa: {
                ...this.state.empresa,
                [inicioe]: value,
            },
        });
    }

    guardarEmpresas() {
        this.setState({ loading: true });
        request
            .post("/empresas", this.state.empresa)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage () {
        if (this.state.rediret) this.props.changeTab( 'buscar' );
    }
    
    render() {
        return (
            <Container id="empresas-crear-container">
                <MessagePrompts
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />
                <Row>
                    <h1>Crear empresa</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Razon social</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue("razon_social", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nit</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue("nit", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>return</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue("rut", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue("telefono", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={(e) => this.setValue("mail", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue("direccion", e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={() => console.log(this.guardarEmpresas())}
                        >
                            Guardar Empresa
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
