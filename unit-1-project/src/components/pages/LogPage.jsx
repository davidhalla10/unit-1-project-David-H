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

    function calculate () {
        setStep("results");
    }

    if (step === "target") {
        return (
        <>
        <main>
            <h1>Select A Target</h1>
            <ul className="target-grid">
                {targets.map((yards) => (
                    <li key={yards}>
                        <button onClick={() => pickTarget(yards)} className="btn btn-flag">
                            <img src="/golf-flag.png" className="flag-icon"></img>
                            <span>{yards} yds</span>
                        </button>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
    }

    if (step === "shots") {
        return (
            <>
            <main>
                <h1>Track Your Shots</h1>
                <p>Aiming at the {target} yds flag</p>

                <ul className="outcome-grid">
                    {outcomes.map((outcome) => (
                        <li key={outcome.label}>
                            <button className="btn btn-outcome" onClick={() => logShot(outcome)}>
                                <span>{outcome.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                <h2>Shots this session ({shots.length})</h2>

                <ul>
                    {shots.map((shot) => (
                        <li key={shot.id}>{shot.label} ({shot.yards}) yds</li>
                    ))}
                </ul>

                <button className="btn" onClick={calculate} disabled={shots.length < 5}>
                    Calculate my distance
                </button>

            </main>
            </>
        )
    }

    let total = 0;
    for (const shot of shots) {
        total = total + shot.yards;
    }

    const average = Math.round(total / shots.length);

    return (
        <main>
            <h1>Your True Carry</h1>
            <p>Aiming at the {target} yds flag</p>
            <p>Shots logged: {shots.length}</p>
            <p>Average Yardge: {average} </p>
        </main>
    )
}

export default LogPage;