import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, useCart } from '../../utils/CartContext';
import Cart from './Cart';
import Collections from '../Home/components/Collections/Collections';
import { describe, expect, it } from 'vitest';

const mockProduct = {
    id: 1,
    title: 'Test mug',
    price: 1000
};

const TestComponent = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Collections />
                <Cart />
            </CartProvider>
        </BrowserRouter>
    );
};

const CartConsumer = () => {
    const { products, addToCart, deleteFromCart } = useCart();

    return (
        <div>
            <div data-testid="product-count">{products.length}</div>
            <button onClick={() => addToCart(mockProduct)}>Add Product</button>
            <button onClick={() => deleteFromCart(mockProduct)}>Delete Product</button>
        </div>
    );
};

describe('Cart Functionality', () => {
    it('initially shows empty cart message', () => {
        render(
            <BrowserRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/You have not added any product yet/i)).toBeInTheDocument();

    });
    it('useCart hook correctly adds and removes products', () => {
        render(
            <CartProvider>
                <CartConsumer />
            </CartProvider>
        );

        const productCount = screen.getByTestId('product-count');
        const addButton = screen.getByText('Add Product');
        const deleteButton = screen.getByText('Delete Product');

        expect(productCount.textContent).toBe('0');

        fireEvent.click(addButton);
        expect(productCount.textContent).toBe('1');

        fireEvent.click(addButton);
        expect(productCount.textContent).toBe('1');

        fireEvent.click(deleteButton);
        expect(productCount.textContent).toBe('1');

        fireEvent.click(deleteButton);
        expect(productCount.textContent).toBe('0');
    });
});