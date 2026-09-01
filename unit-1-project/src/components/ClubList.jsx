import React from "react";
import ClubCard from "./ClubCard";


function ClubList({ clubs, onDelete, onLog }) {
    return(
        <>
        <ul className="club-grid">
            {clubs.map((club) => (
                <ClubCard key={club.id} club={club} onDelete={onDelete} onLog={onLog} /> 
            ))}
        </ul>
        </>
    )
}

export default ClubList;