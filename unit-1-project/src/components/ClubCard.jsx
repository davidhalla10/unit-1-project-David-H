import React from "react";

function ClubCard({ club }) {
    return(
        <>
        <li>
            <h3>{club.name}</h3>
            <p>{club.type}</p>
            <p>You said: {club.claimedYards} yds</p>
        </li>

        </>
    )
}

export default ClubCard;