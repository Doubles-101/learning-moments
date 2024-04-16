export const getPostDetails = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=user&_embed=likes&_expand=topic`).then(res => res.json())
}

export const getPutPostDetails = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}