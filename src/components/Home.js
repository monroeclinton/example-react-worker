import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <header className="header">
                <Link to="/">
                    Multiplier
                </Link>
            </header>
            <div className="banner">
                <h3>Multiply numbers</h3>
                <p>Showing off Cloudflare workers</p>
            </div>
            <div className="content">
                <Link to="/app">
                    Open App
                </Link>
            </div>
        </div>
    );
}

export default Home;
