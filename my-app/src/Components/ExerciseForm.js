import React, { useState } from "react"; 
import FilterResults from "./FilterResults";
//import useForm and figure out the reset and handleSubmit 

function ExerciseForm ({ exercises, user }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitted, setSubmitted] = useState("false"); 
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted("true")
    }
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }       
        else {
            setDifficulty(e.target.value);
        }
    }
        //select forms: bring that up into the fn
        //map through exercises, filter exercise for (exercise.key = category || exercise.key = difficulty) 
        //return div w/className of key form, select name id key values = exercise[key]
        //button id = key, onClick to handlesubmit
        return (
            <div>
                <h4>Filter By:</h4>
                    <div className="category">
                        <form className="exerciseForm" onSubmit={handleSubmit}>
                            <select name="category" id="category" onChange={handleChange}>
                            <option value="" hidden>Category</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Upper Body">Upper Body</option>
                            <option value="Lower Body">Lower Body</option>
                            <option value="Core">Core</option>
                        </select>
                            <select name="difficulty" id="difficulty" onChange={handleChange}>
                            <option value="" hidden>Difficulty</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <br></br>
                        <button>Submit</button>
                        <FilterResults 
                        category={category} 
                        difficulty={difficulty}
                        isSubmitted={isSubmitted} 
                        exercises={exercises}
                        user={user}
                        />
                    </form>
                    </div>
                    <br></br>
                    {/* <div className="popularity">
                        <form className="exerciseForm">
                            <label>
                                Sort by likes
                                <input type="radio" name="pop" value="yes" onChange={handleYes}></input>
                            </label>
                        </form>
                    </div> */}
           </div>
        );
}
export default ExerciseForm; 