import React from "react";
function RenderUserWorkouts({ user }) {


    return (
        <div>
            {user.workouts}
        </div>
    )
}

export default RenderUserWorkouts;