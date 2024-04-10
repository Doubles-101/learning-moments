import { Link } from "react-router-dom"

export const Post = ({ post, postLikes }) => {

    const postLikeCounter = (post) => {    
        const filteredAllPostLikeArray = postLikes.filter((postLike) => 
            parseInt(post.id) === parseInt(postLike.post.id)
        )
        return filteredAllPostLikeArray.length
    }

    return (
        <div className="allpost-post" key={post.id}>
            <Link to={`/${post.id}`}>
                <div className="allpost-title">
                    {post.title}
                </div>
            </Link>
                <div className="allpost-date">
                    Date: {post.date}
                </div>
                <div className="allpost-topic">
                    Topic: {post.topic.type}
                </div>
                <div className="allpost-like">
                    Likes: {postLikeCounter(post)}
                </div>
                <div className="allpost-body">
                    {post.body}
                </div>
        </div>
    )
}