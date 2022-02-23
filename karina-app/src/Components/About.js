import React from "react"; 

function About() {
    return (
        <div>
            <h1 className="hello">Hello! Welcome to Get Fit!</h1>
            <p className="aboutme">As a certified personal trainer and fitness instructor, 
            I wanted to create a workout generator that pulls from a database of exercises and 
            can sort and filter by category, difficulty and likes. It's easy to log in and access your saved workouts or create new ones. 
            Feel free to add an exercise, enjoy! <br></br><br></br>Please be aware that this app does not use authenticated, password-protected logins.</p>
        </div>
    )
}
export default About;