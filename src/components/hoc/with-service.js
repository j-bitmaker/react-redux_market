import React from 'react';
import { ServiceConsumer } from '../context';

const withService = () => (Child) => {
    return (props) => {
        return(
            <ServiceConsumer>
            {
                (marketService) => {
                    return (<Child {...props} 
                        marketService={marketService}/>)
                }
            }
            </ServiceConsumer>
        )
    }
}

export default withService;