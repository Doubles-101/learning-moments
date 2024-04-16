export const getUserProfile = (id) => {
    return fetch(`http://localhost:8088/users/${id}`).then(res => res.json())
}

export const getNumberOfPosts = (id) => {
    return fetch(`http://localhost:8088/posts?userId=${id}`).then(res => res.json())
}

export const getPostEditedUserProfile = (profile) => {
    return fetch(`http://localhost:8088/users/${profile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
}