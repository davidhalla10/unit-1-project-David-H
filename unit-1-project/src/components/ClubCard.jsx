import React from "react";

function ClubCard({ club, onDelete }) {
    return(
        <>
        <li className="club-card">
            <h3>{club.name}</h3>
            <p>{club.type}</p>
            <p>You said: {club.claimedYards} yds</p>
            <button onClick={() => onDelete(club.id)}>Delete</button>
        </li>

        </>
    )
}

export default ClubCard;