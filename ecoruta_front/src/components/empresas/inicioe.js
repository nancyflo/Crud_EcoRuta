import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import "./empresas.css";
import EmpresasBuscar from "./crud/buscar";
import EmpresasCrear from './crud/crear';
import EmpresasEditar from './crud/editar';

export default class Empresas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,

        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdEmpresa = this.setIdEmpresa.bind(this);
        this.getIdEmpresa = this.getIdEmpresa.bind(this);
    }
    setIdEmpresa(id) {
        this.setState({ _id: id});
    }

    getIdEmpresa() {
        return this.state._id;
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
        
    }  
    render() {
        return (
            <Container id="empresas-container">
                <Row>
                    <Nav fill variant="tabs"
                        defaultActiveKey="/buscar"
                        onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
                        >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Row>
                <Row>
                {this.state.currentTab === 'buscar' ? (
            <EmpresasBuscar
                changeTab={this.changeTab}
                setIdEmpresa={this.setIdEmpresa}
                />
            ) : this.state.currentTab === 'crear' ? (
            <EmpresasCrear changeTab={this.changeTab} />
            ) : (
            <EmpresasEditar
                changeTab={this.changeTab}
                getIdEmpresa={this.getIdEmpresa}
            />
            )}
                </Row>
            </Container>
        );
    }
}

