import React, { useState} from "react";
import SaveNewWorkout from "./SaveNewWorkout";

function FilterResults({ category, difficulty, isSubmitted, exercises, user }) {
    const [matches, setMatches] = useState([]);
    const [addedExercises, setAddedExercises] = useState([]);
    if (isSubmitted === "true") {
       exercises.filter(exercise => {
            if (exercise.category === category && exercise.difficulty === difficulty) {
                if (!matches.includes(exercise)) {
                    setMatches([...matches, exercise])

                }
            }
        })
    }
    let renderList= matches.map(match => 
        <li className={match.name} key={match.id}>{match.name}
        <br></br>
            <button className="likes" value={match.likes} onClick={handleClick}>Likes: {match.likes}</button>
            <button className="add" onClick={handleClick}>Add to List</button>
        </li>
        
    ) 
    function handleClick(e) {
        if (e.target.className === "likes") { //if click is on like btn, patch likes
            //patch likes number 
        }
        else {
            if (!addedExercises.includes(e.target.parentElement.className)) {
                setAddedExercises([...addedExercises, e.target.parentElement.className]); //if click is on add, adds to list
            }
        }
    }
    function handleYes(e) {
        console.log("sort by likes")
         /* toggle ^^ useState?  */
    }
    function handleDelete(e) {
        let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
        setAddedExercises(newList)
    }
    let exerciseList = addedExercises.map(addedEx => 
        <li key={addedEx} name={addedEx}>{addedEx} 
        <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
        </li> 
    )

return (
    <div>
        <ul>{renderList}</ul>  
        <div className="popularity">
                <label> 
                     Sort by likes 
                    <input type="radio" name="pop" value="yes" onChange={handleYes}></input> 
                </label>
          </div>
          <ul>{exerciseList}</ul>
          <SaveNewWorkout exerciseList={exerciseList} exercises={exercises} user={user}/>
          {/* <ExerciseRenderer addedExercises={addedExercises} exerciseList={exerciseList}/> */}
    </div>
   );
}
export default FilterResults;