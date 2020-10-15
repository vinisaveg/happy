import React, { FunctionComponent } from 'react';
import Routes from './routes';

import 'leaflet/dist/leaflet.css';
import './styles/global.css';

const App: FunctionComponent = () => {
    return (
        <>
            <Routes />
        </>
    );
};

export default App;
