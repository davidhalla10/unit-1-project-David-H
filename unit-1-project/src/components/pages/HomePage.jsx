import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function HomePage () {
    return(
        <>  
        <Header />
        <main>
            <div>
                <h2>Welcome To True Carry!</h2>
                <p>The app to get your true distance.</p>
                <button>Get Your Distances</button> 
            </div>
        </main>
        <Footer />
        </>
    )
}

export default HomePage;