// import React, {useState} from "react";

// function AddNewExercise({ onAddNew }) {
//     const [name, setName] = useState("");
//     const [image, setImage] = useState("");
//     const [difficulty, setDifficulty] = useState("");
//     const [category, setCategory] = useState("");

//     function handleAdd(e) {
//         e.preventDefault();
//         fetch (" ", {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             image: image,
//             difficulty: difficulty,
//             category: category, 
//         }),
//     })
//     .then((r) => r.json())
//     .then((newExercise) => onAddNew(newExercise))
//     }

//     return (
//         <div className="add-exercise-form">
//             <h1>Add New Exercise</h1>
//             <form onSubmit={handleAdd}>
//                 <input
//                 type="text"
//                 name="name"
//                 placeholder="Exercise name"
//                 ></input>
//             </form>
//         </div>
//     )
// }
// export default AddNewExercise;