import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import Error from './components/error';
import MarketService from './services';
import { ServiceProvider } from './containers/context';
import store from './store';


const marketService = new MarketService();

ReactDOM.render(
   
<Provider store={store}>
    <Error>
        <ServiceProvider value={marketService}>
                <App/>
        </ServiceProvider>
    </Error>
</Provider>, 

document.getElementById('root')
);

