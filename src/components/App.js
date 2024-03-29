import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeHome from '../pages/BadgeHome';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App() {
    return (
    <BrowserRouter>
    <Layout>
    <Switch>
        <Route exact path="/" component={BadgeHome} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} /> 
        <Route component={NotFound} />
    </Switch>
    </Layout>
    </BrowserRouter>
    );
}

export default App;