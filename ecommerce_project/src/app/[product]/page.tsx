'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductPage = (props: any) => {
    // Decode product name from URL
    const product_one = decodeURIComponent(props.params.product);

    // State for product and loading/error handling
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/products`
                );

                if (!res.ok) {
                    throw new Error('Failed to fetch product data');
                }

                const products = await res.json();
                const foundProduct = products.find((p: any) => p.name === product_one);

                if (!foundProduct) {
                    setError('Product not found');
                } else {
                    setProduct(foundProduct);
                }
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [product_one]);

    // Loading State
    if (loading) {
        return <div className="text-center text-2xl font-bold">Loading...</div>;
    }

    // Error State
    if (error) {
        return <div className="text-center text-2xl font-bold text-red-500">{error}</div>;
    }

    // Product not found
    if (!product) {
        return <div className="text-center text-2xl font-bold">Product not found</div>;
    }

    // addto cart function 
    const AddToCart = async (e) => {
        try {
          // Making the POST request to add the product to the cart
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart`, {
            method: 'POST', // Correct method (POST)
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(e), // Passing the data as JSON
          });
          let ok = await response.json()
          console.log(ok)
      
          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Failed to add to cart');
          }
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };
      

    // Render Product Details
    return (
        <div className="flex flex-col md:flex-row min-h-[80vh] items-center justify-center gap-8 p-6">
            {/* Product Image Section */}
            <div className="flex-shrink-0">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Product Details Section */}
            <div className="max-w-lg">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#DB4444] text-2xl font-bold">${product.price}</span>
                    <span className="text-gray-500 line-through text-xl">${product.originalPrice}</span>
                    <span className="bg-[#DB4444] text-white px-2 py-1 rounded">{product.discount}</span>
                </div>
                <button onClick={() => AddToCart(product)} className="bg-[#DB4444] text-white px-6 py-2 rounded-lg hover:bg-[#a83232] transition-all">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;