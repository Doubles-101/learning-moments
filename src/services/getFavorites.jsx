export const getFavorites = (id) => {
    return fetch(`http://localhost:8088/likes?_expand=user&userId=${id}&_expand=post`).then(res => res.json())
}

export const getRemoveFavorite = (id) => {
    return fetch(`http://localhost:8088/likes/${id}`, {
        method: "DELETE"
    })
}