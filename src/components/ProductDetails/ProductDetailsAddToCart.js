'use client'
import React, { useState } from 'react';

const ProductDetailsAddToCart = ({ productDetails }) => {
    const [quantity, setQuantity] = useState(1);
    const handleIncrementQuantity = (event) => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }
    const handleDecrementQuantity = (event) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="flex items-center mt-5">
            <div className='flex items-center'>
                <input defaultValue={quantity} className='border w-12 h-10 flex items-center justify-center text-xl active:outline-none text-center focus:outline-none' type="number" />
                <div className='flex items-center'>
                    <button onClick={handleDecrementQuantity} className='p-3'>-</button>
                    <button onClick={handleIncrementQuantity} className='p-3'>+</button>
                </div>
                <div>
                    <button className='bg-lime-800 text-white px-12 py-2 w-full rounded-md mt-2'>Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsAddToCart;