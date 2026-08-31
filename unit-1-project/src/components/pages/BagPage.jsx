import ClubList from "../ClubList";
import { useState } from "react";

const startingClubs = [
    { id: 1, name: "Driver", type: "Driver", claimedYards: 250},
    { id: 2, name: "7-iron", type: "Iron", claimedYards: 150},
    { id: 3, name: "Pitching Wedge", type: "Wedge", claimedYards: 110},
    { id: 4, name: "9-iron", type: "Iron", claimedYards: 130}
];

function BagPage () {

const [clubs, setClubs] = useState(startingClubs);

const handleDelete = (id) => {
    console.error('handleDelete got: ', id);
    setClubs(clubs.filter((club) => club.id !== id));
}

    return(
        <>
        <main>
            <h1>My Bag</h1>
            <p>Set what you think each club carries, then log a session to find out.</p>
            <ClubList clubs={clubs} onDelete={handleDelete}/>
        </main>
        
        </>
    )
}

export default BagPage;