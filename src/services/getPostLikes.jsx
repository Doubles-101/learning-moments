export const getPostLikes = () => {
    return fetch(`http://localhost:8088/likes?_expand=post`).then(res => res.json())
}