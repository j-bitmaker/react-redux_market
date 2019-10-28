import React from 'react';
import { ServiceConsumer } from '../context';

const withService = () => (Child) => {
    return props => (
            <ServiceConsumer>
            {
                marketService => (<Child {...props} 
                    marketService={marketService}/>)   
            }
            </ServiceConsumer>
        )
}

export default withService;