import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import ProductCard from './ProductCard';

const products = [
    {
        _id: 1,
        img: img1,
        title: 'Car Engine Plug',
        price: 20

    },
    {
        _id: 2,
        img: img2,
        title: 'Car Engine Plug',
        price: 20

    },
    {
        _id: 3,
        img: img3,
        title: 'Car Engine Plug',
        price: 20
    },
    {
        _id: 4,
        img: img4,
        title: 'Car Engine Plug',
        price: 20
    },
    {
        _id: 5,
        img: img5,
        title: 'Car Engine Plug',
        price: 20
    },
    {
        _id: 6,
        img: img6,
        title: 'Car Engine Plug',
        price: 20
    }
]

const Products = () => {
    return (
        <div className='my-6'>
            <div className='text-center my-4'>
                <h3 className='text-2xl font-bold text-orange-400'>Popular Products</h3>
                <h1 className='text-4xl font-bold'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;