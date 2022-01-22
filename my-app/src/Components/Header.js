import React, { useEffect, useState } from "react";
import Userpage from "./Userpage";
import ExerciseContainer from "./ExerciseContainer";

function Header() {
const [nextPage, setNextPage] = useState("");
    function handleChange(e) {
            if (e.target.id === "login") {
                setNextPage("userpage")
            }
            else {
                setNextPage("browse")
            }
    }
    return (
        <header>
            <h1>Get Fit!
            </h1>
            <form onSubmit={handleChange}>
                <div className="radio">
                    <label>
                        <input type="radio" id="login" name="selection" onChange={handleChange}></input>
                    Log In </label>
                    <label>
                        <input type="radio" id="browse" name="selection" onChange={handleChange}></input>
                    Browse </label>
                </div>
            </form>
                <div >{(nextPage) === "userpage" ? <Userpage /> : null }</div>
                <div >{(nextPage) === "browse" ? <ExerciseContainer /> : null }</div>
        </header>
    );
}
export default Header;