import React from "react";
import { useState } from "react";

const outcomes = [
    { label: "Way short", offset: -16 },
    { label: "A little short", offset: -8 },
    { label: "Pin high", offset: 0 },
    { label: "A little long", offset: 8 },
    { label: "Way Long", offset: 16 },
]

const targets = [50, 75, 100, 125, 150, 175, 200, 225];

function LogPage () {

    const [target, setTarget] = useState(null);
    const [step, setStep] = useState('target');
    const [shots, setShots] = useState([]);

    function pickTarget (yards) {
        setTarget(yards);
        setStep("shots");
    }

    function logShot (outcome) {
        const newShot = {
            id: Date.now(),
            label: outcome.label,
            yards: target + outcome.offset,
        }
        setShots([...shots, newShot]);
    }

    if (step === "target") {
        return (
        <>
        <main>
            <h1>Select A Target</h1>
            <ul>
                {targets.map((yards) => (
                    <li key={yards}>
                        <button onClick={() => pickTarget(yards)}>
                            <span>{yards} yds</span>
                        </button>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
    }

    return <h2>Shot Tracker</h2>
}

export default LogPage;