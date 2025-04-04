import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../utils/CartContext';
import ThankYou from './ThankYou';
import { describe, it, expect } from 'vitest';

describe('ThankYou Component', () => {
    it('renders thank you message correctly', () => {
        render(
            <BrowserRouter>
                <CartProvider>
                    <ThankYou />
                </CartProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Thank you for your order!/i)).toBeInTheDocument();
        expect(screen.getByText(/For more information, please visit the/i)).toBeInTheDocument();

        const faqLink = screen.getByText('FAQ section.');
        expect(faqLink).toBeInTheDocument();
        expect(faqLink.getAttribute('href')).toBe('/faq');
    });
});