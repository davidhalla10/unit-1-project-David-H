import React from "react";
import ClubCard from "./ClubCard";


function ClubList({ clubs, onDelete }) {
    return(
        <>
        <ul className="club-grid">
            {clubs.map((club) => (
                <ClubCard key={club.id} club={club} onDelete={onDelete} /> 
            ))}
        </ul>
        </>
    )
}

export default ClubList;