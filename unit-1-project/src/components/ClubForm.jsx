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
                <button type="submit">Add Club</button>
            </div>
        </form>

        </>
    )
}


export default ClubForm;