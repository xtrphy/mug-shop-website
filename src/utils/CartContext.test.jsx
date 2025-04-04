import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CartProvider, useCart } from '../utils/CartContext';
import { beforeEach, describe, expect, it } from 'vitest';

const TestComponent = () => {
    const { products, addToCart, deleteFromCart, clearCart } = useCart();

    const testProduct = { id: 1, title: 'Test mug', price: 1000 };

    return (
        <div>
            <div data-testid="product-count">{products.length}</div>
            <div data-testid="total-quantity">
                {products.reduce((sum, item) => sum + item.quantity, 0)}
            </div>
            <button onClick={() => addToCart(testProduct)}>Add Product</button>
            <button onClick={() => deleteFromCart(testProduct)}>Remove Product</button>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

describe('CartContext', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('provides initial empty cart state', () => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        expect(screen.getByTestId('product-count').textContent).toBe('0');
    });

    it('adds products to cart correctly', () => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        const addButton = screen.getByText('Add Product');

        act(() => {
            fireEvent.click(addButton);
        });

        expect(screen.getByTestId('product-count').textContent).toBe('1');
        expect(screen.getByTestId('total-quantity').textContent).toBe('1');

        act(() => {
            fireEvent.click(addButton);
        });

        expect(screen.getByTestId('product-count').textContent).toBe('1');
        expect(screen.getByTestId('total-quantity').textContent).toBe('2');
    });

    it('removes products from cart correctly', () => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        const addButton = screen.getByText('Add Product');
        const removeButton = screen.getByText('Remove Product');

        act(() => {
            fireEvent.click(addButton);
            fireEvent.click(addButton);
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('2');

        act(() => {
            fireEvent.click(removeButton);
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('1');


        act(() => {
            fireEvent.click(removeButton);
        });

        expect(screen.getByTestId('product-count').textContent).toBe('0');
    });

    it('persists cart to localStorage', () => {
        const { unmount } = render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        const addButton = screen.getByText('Add Product');

        act(() => {
            fireEvent.click(addButton);
        });

        const localStorageContent = localStorage.getItem('products');

        unmount();

        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        expect(screen.getByTestId('product-count').textContent).toBe('1');
        expect(localStorage.getItem('products')).toBe(localStorageContent);
    });
});