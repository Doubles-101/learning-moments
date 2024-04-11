export const getLikeToggle = (userId, postId) => {
    return fetch(`http://localhost:8088/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userId: userId, postId: postId})
    })
}

export const deleteLike = (id) => {
    return fetch(`http://localhost:8088/likes/${id}`, {
        method: "DELETE"
    })
}