import React from "react";
import { useState } from "react";

const targets = [50, 75, 100, 125, 150, 175, 200, 225];

function LogPage() {

    const [target, setTarget] = useState(null);
    const [step, setStep] = useState('target');
    const [shots, setShots] = useState([]);

    return (
        <>
        <main>
            <h1>Select A Target</h1>
            <ul>
                
            </ul>
        </main>
        </>
    )
}

export default LogPage;