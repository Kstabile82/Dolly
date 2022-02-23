import React from "react";
function LikeBtn({ match }) {
    function handleLikes(e) {
            if (match.name === e.target.parentNode.parentNode.className || match.name === e.target.parentNode.parentNode.id) {
                            match.likes++
                            e.target.value++
                            fetch (`http://localhost:3000/exercises/${match.id}`, {
                                method: "PATCH",
                                headers: {
                                "Content-Type": "application/json",
                                },
                            body: JSON.stringify({
                                "likes": match.likes
                            }),
                        })
                        .then((r) => r.json())
                        .then((json) => json.likes = match.likes)
                        e.target.innerText= `Likes: ${match.likes}`
                }
            else {
            }
        }
    return (
        <div>
            <button className="likes" value={match.likes} onClick={handleLikes}>Likes: {match.likes}</button>
        </div>
    )
}
export default LikeBtn;