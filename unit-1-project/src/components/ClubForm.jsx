import React from "react";
import { useState } from 'react';

const emptyForm = {
    name: '',
    type: "Iron",
    claimedYards: '',
    inBag: true,
}


function ClubForm ({ onAdd }) {

const [values, setValues] = useState(emptyForm);

    function change (event) {
        const { name, value, type, checked } = event.target;

        let newValue;
        if (type === 'checkbox') {
            newValue = checked
        } else {
            newValue = value;
        }

        setValues({
            ...values,
            [name]: newValue,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        onAdd(values);
        setValues(emptyForm);
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Club name</label>
                <input id="name" name="name" type="text" value={values.name} onChange={change}/>
            </div>
            <div>
                <label htmlFor="type">Club type</label>
                <select id="type" name="type" value={values.type} onChange={change}>
                <option value="Driver">Driver</option>
                <option value="Wood">Wood</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Iron">Iron</option>
                <option value="Wedge">Wedge</option>
                </select>

            </div>
            <div>
                <label htmlFor="claimedYards">Claimed Carry</label>
                <input id="claimedYards" name="claimedYards" type="number" value={values.claimedYards} onChange={change}/>
            </div>

            <button className="btn" type="submit">Add Club</button>
        </form>

        </>
    )
}


export default ClubForm;