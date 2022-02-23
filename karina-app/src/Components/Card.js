import React, { useState } from "react";
import LikeBtn from "./LikeBtn";
function Card({ exercise, setResult }) {
    const [isShowing, setIsShowing] = useState(true);
    const card = {
        display: isShowing ? "visible" : "none",
        backgroundColor: "white",
        border: "dotted", 
        font: "red"
    } 
    function handleClick(e) {
        e.preventDefault();
        setIsShowing(false);
        if (setResult) {
            setResult("")
        }
    }
 return (
    <div className="card" id={exercise.name} style={card}> 
         <p>Name: {exercise.name}</p>
         <p>Category: {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}</p>
         <p>Difficulty: {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}</p> 
         <button className="close" id="closed" onClick={handleClick}>close</button> 
         <LikeBtn match={exercise} />
     </div>
 )
}
export default Card;