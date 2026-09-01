import React from 'react';
import { Link } from "react-router";

function HomePage () {

    return(
        <>  
        <main>
            <div>
                <h1>Welcome To True Carry!</h1>
                <p>The app to get your true distance.</p>
                <Link to="/bag">
                    <button>Get Your Distances</button>
                </Link>
            </div>

            <section>
                <h2>How It Works</h2>
                    <ol>
                        <li>
                            <h3>Build Your Bag</h3>
                            <p>Add your clubs and what you think each one carries.</p>
                        </li>
                        <li>
                            <h3>Pick A Flag</h3>
                            <p>Choose the target you are aiming at with that club.</p>
                        </li>
                        <li>
                            <h3>Log Your Shots</h3>
                            <p>One tap per swing. Short, pin high, or long.</p>
                        </li>
                        <li>
                            <h3>See How Far Your Clubs REALLY Go</h3>
                            <p>True Carry averages out your shots and compares it to what you claimed.</p>
                        </li>
                    </ol>
            </section>

        </main>
        </>
    )
}

export default HomePage;