import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landing/Landing'
import OrphanagesMap from './pages/orphanages/OrphanagesMap'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/orphanages" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
