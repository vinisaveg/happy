import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing';
import OrphanagesMap from './pages/orphanages/OrphanagesMap';
import Orphanage from './pages/orphanage/Orphanage';
import CreateOrphanage from './pages/createOrphanage/CreateOrphanage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/orphanages" exact component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
