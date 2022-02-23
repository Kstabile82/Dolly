import React, { useState } from "react";
import Card from "./Card";

function RenderUserWorkouts({ user }) {
    const [clickedEx, setClickedEx] = useState({})
    const [clickedWorkout, setClickedWorkout] = useState("")
   
    let userworkout = user.workouts.map(wkt => {
        return (
            <div><ul><strong>{wkt.title}</strong>
        {wkt.workout.map(ex => {
            return (
                <div className={wkt.title}>
                    <li key={ex.id} onClick={(e) => handleEx(e, ex)}>{ex.name}</li>
                    <div key={ex.name}>{(clickedEx.name) === ex.name && clickedWorkout === wkt.title ? <Card exercise={clickedEx} setResult={setClickedEx} /> : null }</div>
                </div>
            )
        })}
        <br></br>
        </ul></div>
        )
    })
       function handleEx(e, ex) {
            setClickedEx(ex);
            setClickedWorkout(e.target.parentElement.className)  
        }
    return (
        <div>{userworkout}</div>
    )
}

export default RenderUserWorkouts;
