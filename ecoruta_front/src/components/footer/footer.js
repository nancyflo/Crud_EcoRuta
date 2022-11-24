import React from 'react';

export default class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3"  >
                        <h5 className="text-uppercase">EcoRuta</h5>
                        <img
                alt="logo"
                src="https://www.cuidatuvida.com/wp-content/uploads/2020/12/tipos-de-reciclaje-imagen-destacada.jpg"
                width="30%"
              />
                    </div>
        
                    <hr className="clearfix w-100 d-md-none pb-0"/>
        
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Trajajo realizado por</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Nancy Basto</a></li>
                            <li><a href="#!">Beatriz Giraldo</a></li>
                            <li><a href="#!">Edith Tapias</a></li>
                            <li><a href="#!">Alex Pinchao</a></li>
                            <li><a href="#!">Ronakd Valdes</a></li>
                        </ul>
                    </div>
        
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Redes sociales</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">facebok</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://mdbootstrap.com/"> EcoRuta</a>
            </div>
        
        </footer>
         );
    }

}
