import React from 'react';
import { Link } from "react-router";

function HomePage () {

    return(
        <>  
        <main>
            <div id="body-container">
                <h2>Welcome To True Carry!</h2>
                <p>The app to get your true distance.</p>
                <Link to="/Bag">
                    <button>Get Your Distances</button>
                </Link>
            </div>
        </main>
        </>
    )
}

export default HomePage;