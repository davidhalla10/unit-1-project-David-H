import React from "react";

function ClubCard({ club, onDelete, onLog }) {
    return(
        <>
        <li className="club-card">
            <h3>{club.name}</h3>
            <p>{club.type}</p>
            <p>You said: {club.claimedYards} yds</p>
            <button className="btn-card" onClick={() => onDelete(club.id)}>Delete</button>
            <button className="btn-card" onClick={() => onLog(club.id)}>Get Distance</button>
        </li>

        </>
    )
}

export default ClubCard;