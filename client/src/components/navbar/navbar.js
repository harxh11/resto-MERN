import { Link } from "react-router-dom";
import "../../static/css/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const user = window.localStorage.getItem("userID");
    const navigate = useNavigate();

    function handleLogout() {
        window.localStorage.clear();
        navigate("/");
    }


    return (
    <>
        
    <header>

    <a href="#" class="logo"><i class="fas fa-utensils"></i>resto.</a>

        <nav class="navbar">
            <a class="active" href="/">home</a>
            <a href="/">Dishes</a>
            <a href="/">About</a>
            <a href="/">Menu</a>
            <a href="/">Review</a>
            { user ? <a href="/login" onClick={handleLogout}>Logout</a> : <a href="/login">Login</a>}
            
        </nav>

        <div class="icons">
            <i class="fas fa-bars" id="menu-bars"></i>
            <a class="fas fa-search" id="search-icon" href="/search"></a>
            <a href="/favorites" class="fas fa-heart"></a>
            <a href="/cart" class="fas fa-shopping-cart"></a>
        </div>

    </header>


    </>
    );
}