import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../login/login';
import Registro from '../registro/registro';
import PrivateRoute from '../auth/privaterouter';
import Planes from '../planes/planes';
import empresas from '../empresas/inicioe';

export default function AppRoutes () {
    return(
        <Router>
            <Switch>
            <PrivateRoute exact path={ [ "/empresas" ] } component={ empresas } />
            {/* <PrivateRoute exact path={ [ "/home" ] } component={ Home } /> */}
            <Route exact path={ ["/login" ] } component={ Login } />
            <Route exact path={ ["/planes" ] } component={ Planes } />
            {/* <Route exact path={ [ "/" ] } component={ Inicio } /> */}
            <Route exact path={ ["/registro" ] } component={ Registro } />
            <Route path={ "*" } component={ () => (
                        <h1 style={{ marginTop: 300 }}>
                        404
                        <br/>
                        Página no encontrada
                        </h1>
                    ) } />
            </Switch>   
        </Router>

        );
}