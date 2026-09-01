import React from "react";
import { useState } from "react";

const targets = [50, 75, 100, 125, 150, 175, 200, 225];

function LogPage () {

    const [target, setTarget] = useState(null);
    const [step, setStep] = useState('target');
    const [shots, setShots] = useState([]);

    function pickTarget (yards) {
        setTarget(yards);
        setStep("shots");
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