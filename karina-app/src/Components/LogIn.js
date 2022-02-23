import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Welcomepage from "./Welcomepage";

function LogIn() {
const [inputname, setInputName] = useState("");
const [loggedOut, setLoggedOut] = useState(true);
let goodText = "Thank you, your username has been accepted!"
let failText = "You didn't enter anything."
let noMatchText = "Sorry, that username isn't in our database. Please try again or create a new one."
let takenUserName = "Sorry, that username is already taken. Please try something more unique."
const [added, setAdded] = useState("");
const [user, setUser] = useState({});
let name = "";
let workouts = [];
const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((r) => r.json())
        .then((currentusers) => {
            setUserData(currentusers);
          })
     },[]);
    function handleName(e) {
       e.preventDefault();
       setAdded("")
       setInputName(e.target.parentElement.firstChild.nextSibling.value);
        if (inputname === "") {
            setAdded("false");
        }
         let findMatch = userData.find(listItem => listItem.name.toLowerCase() === inputname.toLowerCase()); 
                 if (findMatch !== undefined) {
                    setUser(findMatch)
                    setLoggedOut(false);

                 }
                 else {
                     setAdded("mismatch")
                 }       
    }
    function handleAdd(e) {
        e.preventDefault();
        setAdded("");
        name = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();
         if (name === "") {
            setAdded("false")
         } 
         else {
            let nameMatch = userData.find(user => user.name === name); 
            if (nameMatch === undefined) {
                fetch ("http://localhost:3000/users", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    name,
                    workouts,
                    }),
                })
                .then((r) => r.json())
                setAdded("true");
                setLoggedOut(false);
                setUser({
                    "name": name, 
                    "workouts": [],
                }); 
            }
            else {
                setAdded("taken")
            }
        }
    }
    //use css to make the visibility of forms depend on clicked? state for hidden? reset values?  
    return (
        <div>
            <form className="login" onSubmit={handleName} style={{display: loggedOut ? 'visible' : 'none' }}> 
                User Login:  
                <input 
                type="text" 
                id="inputname" 
                placeholder="Enter your username"
                onChange={(e) => setInputName(e.target.value)}></input>  
                <button>Enter</button>
                {added === "false" ? <Dashboard theText={failText} /> : null }
                {added === "mismatch" ? <Dashboard theText={noMatchText} /> : null }
            </form>
            <form className="newuser" onSubmit={handleSubmit} style={{display: loggedOut ? 'visible' : 'none' }}>
                Create New User:  
                <input 
                type="text"
                name="username"
                placeholder="Pick a unique username"
                onChange={handleAdd}
                ></input>                
                <button>Enter</button> 
                {added === "true" ? <Dashboard theText={goodText} /> : null } 
                {added === "false" ? <Dashboard theText={failText} /> : null }
                {added === "taken" ? <Dashboard theText={takenUserName} /> : null }
            </form> 
            {user ? <Welcomepage user={user} /> : null}
        </div>
    )
}
export default LogIn; 