import React, { Component, useState } from 'react';
import styles from "./styles.module.css"

const Form = (props) => {
    // color is the name of my array
    const [color, setColor] = useState([]);
    const [formInput, setformInput] = useState("");

    const renderColor = (e) => {
        e.preventDefault();
        // grabbing old colors -- e is event, target is input element, value is color.
        setColor([...color, formInput])
        console.log({ color })
        // clears set form input
        setformInput("")
    }

    return (
        <div>
            <form onSubmit={renderColor}>
                <label>Color</label>
                <input 
                type="text" 
                value={formInput} 
                onChange={(e) => {
                    setformInput(e.target.value)
                }}/>
                <button>Add</button>
            </form>
            
            <div className={styles.parent}>
                {
                    color.map((box,key) => {
                        return(
                            // key={key} gets rid of warning
                            <div className={styles.box} style={{backgroundColor:box}} key={key} > {box}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form;