import React from 'react';

const ProductCard = ({ product }) => {
    const { img, price, title } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-3/4 h-full' src={img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;