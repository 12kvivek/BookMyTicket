import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <a href="/"><img src="logo.jpeg" alt="BookMyTicket"/></a>
            <a href="/Movies">Offers</a>
            <ul class="nav-list"> <li class="nav-item-right"><a href="/login"><button>Login/Signup</button></a></li></ul>
        </div>
    );
}

export default Navbar;
