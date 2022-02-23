import React, { useState } from "react"; 
//set forms back to default value after isSubmitted -- may need a cb function that contains all? 

function ExerciseForm ({ exercises, matches, setMatches, setSubmitted }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    let matchedEx; 
    function handleSubmit(e) { 
        setMatches(exercises)
        e.preventDefault();
        if (category == "" || difficulty == "") { //if either are blank, not submitted
            setSubmitted("false")
        }
        else { //is submitted
            setSubmitted("true");
            matchedEx= matches.filter(exercise => {
                if (exercise.category === category && exercise.difficulty === difficulty) {
                    return exercise; 
                }
            })
        }
        setMatches(matchedEx)
    }
    function handleChange(e) { //setting the category & difficulty to match input selections
        e.preventDefault();
        setMatches(exercises)
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }       
        else if (e.target.name === "difficulty") {
            setDifficulty(e.target.value);
        }
    }
        return (
            <div>
                    <h4>Filter exercises:</h4>
                        <form className="exerciseForm" onSubmit={handleSubmit}>
                            <select name="category" id="category" onChange={handleChange}>
                            <option value="" hidden>Category</option>
                            <option value="cardio">Cardio</option>
                            <option value="upper body">Upper Body</option>
                            <option value="lower body">Lower Body</option>
                            <option value="core">Core</option>
                        </select>
                            <select name="difficulty" id="difficulty" onChange={handleChange}>
                            <option value="" hidden>Difficulty</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        <br></br>
                        <button>Submit</button>
                        </form>
           </div>
        );
}

export default ExerciseForm; 