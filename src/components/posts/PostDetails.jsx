import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../../services/getPostDetails.jsx"

export const PostDetails = ({ currentUser }) => {

    const [post, setPost] = useState({})
    const [postLikes, setPostLikes] = useState({})

    const { postId } = useParams()

    useEffect(() => {
        getPostDetails(postId).then((data) => {
            const postObj = data[0]
            setPost(postObj)
        })
    }, [])

    /* to get this current post's likes */
    useEffect(() => {
       
    }, [])

    const numberOfLikes = () => {
        return post.likes?.length
    }

    const handleEdit = () => {
        console.log("Edit!!")
    }

    const handleLike = () => {
        console.log("Like <3")

        /* If the user already likes the post, delete the like on the likes database */
        
        /* If the user does not already like the post, post a like on the likes database */
    }

    return (
        <div>
            <header>{post.title}</header>
            <div>
                <div>{post.user?.fullName}</div>
                <div>{post.topic?.type}</div>
                <div>{post.date}</div>
                <div>{post.body}</div>
                <div>Number of Likes: {numberOfLikes()}</div>
            </div>
            <footer>
                <div className="btn-container">
                    {/* Need to add onClick to move the user to the edit post view */}
                    {currentUser.id === parseInt(post.user?.id) ?(
                        <button className="btn-like" onClick={handleEdit}>Edit</button>) : (                           
                        "")}
                        {/* Need to add onClick to POST to the database that the user likes the post */}
                    {currentUser.id !== parseInt(post.user?.id) ?(
                        <button className="btn-like" onClick={handleLike}>Like</button>) : (                           
                        "")}
                </div>
            </footer>
        </div>
    )
}