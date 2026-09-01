import React from 'react';
import ClubList from "../ClubList";
import ClubForm from "../ClubForm";
import { useState } from "react";
import { useNavigate } from "react-router";

const startingClubs = [
    { id: 1, name: "Driver", type: "Driver", claimedYards: 250},
    { id: 2, name: "7-iron", type: "Iron", claimedYards: 150},
    { id: 3, name: "Pitching Wedge", type: "Wedge", claimedYards: 110},
    { id: 4, name: "9-iron", type: "Iron", claimedYards: 130}
];

function BagPage () {

const navigate = useNavigate();
const [clubs, setClubs] = useState(startingClubs);

function log (id) {
    navigate(`/log/${id}`);
}

function handleAdd (values) {
    const newClub = {
        id: Date.now(),
        name: values.name,
        type: values.type,
        claimedYards: Number(values.claimedYards),
        inBag: values.inBag,
    }
    setClubs([...clubs, newClub])
}

function handleDelete (id) {
    setClubs(clubs.filter((club) => club.id !== id))
}


    return(
        <>
        <main>
            <h1>My Bag</h1>
            <p>Set what you think each club carries, then log a session to find out.</p>
            <ClubForm onAdd={handleAdd}/>
            <ClubList clubs={clubs} onDelete={handleDelete} onLog={log}/>
        </main>
        
        </>
    )
}

export default BagPage;