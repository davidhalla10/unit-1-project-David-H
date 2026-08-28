import React from "react";
import ClubCard from "./ClubCard";

function ClubList({ clubs }) {
    return(
        <>
        <ul>
            {clubs.map((club) => (
                <ClubCard key={club.id} club={club} /> 
            ))}
        </ul>
        </>
    )
}

export default ClubList;