import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/app" component={App} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
