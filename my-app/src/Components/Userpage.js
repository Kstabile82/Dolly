import React, { useEffect, useState } from "react";
import ExerciseContainer from "./ExerciseContainer";
import RenderUserWorkouts from "./RenderUserWorkouts";

function Userpage() {
const [inputname, setInputName] = useState("");
const [userData, setUserData] = useState([]);
const [user, setUser] = useState([]);
const [nextStep, setNextStep] = useState("")
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((r) => r.json())
        .then((currentusers) => {
            setUserData(currentusers);
          })
     },[]);
    function handleName(e) {
        e.preventDefault();
        setInputName(e.target.parentElement.firstChild)
            userData.map(listItem =>  {
                if (listItem.name.toLowerCase() === inputname.toLowerCase()) {
                    setUser(listItem)
                }
            })
    }
    function handleNext(e) {
        e.preventDefault();
        if (e.target.id === "createnew") {
            setNextStep(e.target.id)
        }
          else {
            setNextStep("seeworkouts")
          }        
    }
    if (user.name !== undefined) {
        return (
            <div>Welcome, {user.name}! 
                <form>What would you like to do?
                    <button id="createnew" name="nextsteps" onClick={handleNext}>Create a New Workout</button>
                    <button id="seeworkouts" name="nextsteps" onClick={handleNext}>See My Workout List</button>
                </form>
                <div >{(nextStep) === "createnew" ? <ExerciseContainer user={user} /> : null }</div>
                <div >{(nextStep) === "seeworkouts" ? <RenderUserWorkouts user={user} /> : null }</div>
            </div>
        )
    }
    return (
        <div>
            <form onSubmit={handleName}>Username:
                <input type="text" id="inputname" onChange={(e) => setInputName(e.target.value)}></input>  
                <button>Enter</button>   
            </form> 
        </div>
    )
}
export default Userpage; 