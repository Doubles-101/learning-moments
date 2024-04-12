export const getMyPosts = (userId) => {
    return fetch(`http://localhost:8088/posts?userId=${userId}`).then(res => res.json())
}

export const getDeleteMyPost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
}