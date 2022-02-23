import React from "react";
import SaveNewWorkout from "./SaveNewWorkout";

function MyWorkoutList({ addedExercises, user, exercises, setAddedExercises }) {
    function handleDelete(e) {
        let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
        setAddedExercises(newList)
    }
    let exerciseList = addedExercises.map(addedEx => 
        <li key={addedEx} name={addedEx}>{addedEx} 
        <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
        </li> 
    );
    return (
        <div>
        <h3>My Workout: </h3>
        <ul>{exerciseList}</ul>
        {user != undefined && exerciseList.length > 0 ? <SaveNewWorkout user={user} exerciseList={exerciseList} exercises={exercises} /> : null}
        

        </div>
    )
}
export default MyWorkoutList;