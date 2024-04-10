export const getPostDetails = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=user&_embed=likes&_expand=topic`).then(res => res.json())
}