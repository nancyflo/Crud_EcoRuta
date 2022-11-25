import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class EmpresasEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpresa: this.props.getIdEmpresa(),
            rediret: false,
            message: {
                text: "",
                show: false,
            },
            confirmation:{
                title:'Modificar empresa',
                text:'¿Desea modificar la empresa?',
                show: false,
            },
    
            loading: false,
            empresa: {
                razon_social: "",
                nit: "",
                rut: "",
                telefono: "",
                mail: "",
                direccion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);

    }

    componentDidMount() {
        this.getEmpresa();
    }

    getEmpresa() {
        this.setState({ loading: true });
        request
            .get(`/empresas/${this.state.idEmpresa}`)
            .then((response) => {
                this.setState({
                    empresa: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
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
            .put(`/empresas/${this.state.idEmpresa}`, this.state.empresa)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab("buscar");
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
    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab("buscar");
    }
    onCancel(){
        this.setState({
            confirmation: { ...this.state.confirmation, show: false, }, })
    }
    
    onConfirm(){
        this.setState({
            confirmation: { ...this.state.confirmation, show: false, }, }, 
            this.guardarEmpresas());
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
                <ConfirmationPrompts
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />

                <Loading show={this.state.loading} />
                <Row>
                    <h1>Editar empresa</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Razon social</Form.Label>
                            <Form.Control
                                value={this.state.empresa.razon_social}
                                onChange={(e) => this.setValue("razon_social", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nit</Form.Label>
                            <Form.Control
                                value={this.state.empresa.nit}
                                onChange={(e) => this.setValue("nit", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Rut</Form.Label>
                            <Form.Control
                                value={this.state.empresa.rut}
                                onChange={(e) => this.setValue("rut", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                value={this.state.empresa.telefono}
                                onChange={(e) => this.setValue("telefono", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                value={this.state.empresa.mail}
                                type="email"
                                onChange={(e) => this.setValue("mail", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                value={this.state.empresa.direccion}
                                onChange={(e) => this.setValue("direccion", e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={() => 
                                this.setState({
                                confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            Guardar Empresa
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
