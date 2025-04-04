import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../utils/CartContext";
import Header from "./Header";
import { describe, it, expect } from "vitest";

const renderHeader = () => {
    return render(
        <BrowserRouter>
            <CartProvider>
                <Header />
            </CartProvider>
        </BrowserRouter>
    );
};

describe('Header component', () => {
    it('renders navigation links correctly', () => {
        renderHeader();

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/All products/i)).toBeInTheDocument();
        expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
        expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    });

    it('renders cart with the correct initial count', () => {
        renderHeader();

        expect(screen.getByText(/Cart/i)).toBeInTheDocument();

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders logo image', () => {
        renderHeader();

        const logoImg = document.querySelector('.logo');
        expect(logoImg).toBeInTheDocument();
    });
});