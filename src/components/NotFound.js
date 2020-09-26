import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="container">
            <header className="header">
                <Link to="/">
                    Multiplier
                </Link>
            </header>
            <div className="banner">
                <h3>Page not found.</h3>
            </div>
        </div>
    );
}

export default NotFound;
