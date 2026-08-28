import React from "react";


const startingClubs = [
    { id: 1, name: "Driver", type: "Driver", claimedYards: 250},
    { id: 2, name: "7-iron", type: "Iron", claimedYards: 150},
    { id: 3, name: "Pitching Wedge", type: "Wedge", claimedYards: 110}
];

function BagPage () {
    return(
        <>
        <main>
            <h1>My Bag</h1>
            <p>Set what you think each club carries, then log a session to find out.</p>


        </main>
        
        </>
    )
}

export default BagPage;