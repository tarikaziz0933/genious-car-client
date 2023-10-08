import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { service_id } = useLoaderData();
    return (
        <div>
            <h2>Checkout</h2>
            <p>{service_id}</p>
        </div>
    );
};

export default CheckOut;