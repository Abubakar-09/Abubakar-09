'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CartPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/cart`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch cart data');
        }
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  // Loading state
  if (loading) {
    return <div className="text-center text-2xl font-bold">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-2xl font-bold text-red-500">{error}</div>;
  }

  // Empty cart state
  if (products.length === 0) {
    return <div className="text-center text-2xl font-bold">Your cart is empty</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b pb-4"
          >
            {/* Product Image */}
            <div className="flex items-center gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={product.imageWidth}
                height={product.imageHeight}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>

            {/* Price Details */}
            <div className="text-right">
              <p className="text-xl font-bold text-[#DB4444]">${product.price}</p>
              <p className="text-gray-500 line-through">${product.originalPrice}</p>
              <p className="text-green-500">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price Section */}
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <h2 className="text-2xl font-bold">Total</h2>
        <p className="text-2xl font-bold text-[#DB4444]">${totalPrice}</p>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center">
        <button className="bg-[#DB4444] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#a83232] transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;