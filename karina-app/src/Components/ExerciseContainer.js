import React, { useState, useEffect } from "react"; 
import ExerciseForm from "./ExerciseForm";
import AddNewExercise from "./AddNewExercise";
import MyWorkoutList from "./MyWorkoutList";
import Card from "./Card";
import Dashboard from "./Dashboard"

function ExerciseContainer({ user }) {
    const [clicked, setClicked] = useState("");
    const [exercises, setExercises] = useState([]);
    const [addedExercises, setAddedExercises] = useState([]);
    const [matches, setMatches] = useState(exercises);
    const [checked, setChecked] = useState(false);
    const [isSubmitted, setSubmitted] = useState("")
    let errorText= "You didn't complete both fields"

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((r) => r.json())
        .then((currentExercises) => {
            setExercises(currentExercises);
            setMatches(currentExercises);
            setSubmitted("true")
         });
    }, []);
    function handleClicked(e, ex) {
        setClicked(ex.name)
    }
    function handleClick(e) {
        if (!addedExercises.includes(e.target.parentElement.firstChild.innerText)) {
            setAddedExercises([...addedExercises, e.target.parentElement.firstChild.innerText]); 
        }
    }
    function handleSortByLikes(e) {
        setChecked(!checked)
        if (e.target.checked === true) {
            matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
        }
        else {
            matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
        }
    }
    function postNewExercise(newEx) {
        console.log(newEx)
        fetch ("http://localhost:3000/exercises", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newEx)
            })
        .then((r) => r.json())
        .then(exercise => setExercises([...exercises, exercise], setMatches([...exercises, exercise])))
    }
    return (
        <div className="container">
            <br></br>
            Choose the exercise category and difficulty level you'd like to see, then add exercises to the "My Workout" list as desired. To delete an exercise from your workout list, click the "X" that appears once it's been added. Feel free to add a new exercise to our database, too! 
            <ExerciseForm 
            exercises={exercises} 
            matches={matches}
            setMatches={setMatches}
            setSubmitted={setSubmitted}
            /> 
             <div className="exerciseContainer">
            <h3>Exercises</h3> 
            <div className="popularity">
                                    <label className="sortbylikes">Sort by likes
                                        <input id="sort" type="checkbox" checked={checked} onChange={handleSortByLikes}></input>
                                    </label>
                            </div>
                            <br></br>
                            {isSubmitted === "false" ? <Dashboard theText={errorText} /> : null}
                            {isSubmitted === "true" ? 

            <ul className="seeallexercises" key="list">{matches.map(ex => {
               return (
                <div className="listofall" key={ex.id + "b"}>
                    <li key={ex.id} onClick={(e) => handleClicked(e, ex)}>{ex.name}</li>
                    <li key={ex.name.likes}>Likes: {ex.likes}</li>
                    <button key={ex.id + "a"} onClick={handleClick}>Add to List</button>
                    <div key={ex.name}>{(clicked) === ex.name ? <Card exercise={ex} setResult={setClicked} /> : null }</div>
                    <br></br>
                </div>
               )
               })} </ul> : null } </div>  
               <MyWorkoutList addedExercises={addedExercises} user={user} exercises={exercises} setAddedExercises={setAddedExercises} />
            <AddNewExercise exercises={exercises} setExercises={setExercises} setMatches={setMatches} postNewExercise={postNewExercise} matches={matches}/> 
        </div>
    );
}
export default ExerciseContainer; 