import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getPostDetails } from "../../services/getPostDetails.jsx"
import { deleteLike, getLikeToggle } from "../../services/getLikeToggle.jsx"

export const PostDetails = ({ currentUser }) => {

    const [post, setPost] = useState({})
    const [postUserLikes, setPostUserLikes] = useState([])
    const [likeNumber, setLikeNumber] = useState(0)

    const { postId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getPostDetails(postId).then((data) => {
            const postObj = data[0]
            setPost(postObj)
        })
    }, [likeNumber])

    /* checks database to see if the current user likes this post */
    useEffect(() => {
       const likesArray = post.likes?.filter((like) => {
            return parseInt(currentUser.id) === parseInt(like.userId)
       })
       setPostUserLikes(likesArray)
    }, [post])

    useEffect(() => {
        setLikeNumber(post.likes?.length)
    }, [post])

   


    const handleEdit = () => {
        navigate("/editpost")
    }

    const handleLike = () => {       

        /* If the user already likes the post, delete the like on the likes database */
        /* If the user does not already like the post, post a like on the likes database */
        if (postUserLikes.length === 0) {
            console.log("Like <3")
            getLikeToggle(currentUser.id, post.id)  
        } else if (postUserLikes.length > 0) {
            console.log("Delete Like")
            deleteLike(postUserLikes[0].id)
        }

        /* this runs so that the post reruns and the page properly dislplays the info */
        setLikeNumber('')
    }

    return (
        <div>
            <header>{post.title}</header>
            <div>
                <div>{post.user?.fullName}</div>
                <div>{post.topic?.type}</div>
                <div>{post.date}</div>
                <div>{post.body}</div>
                <div>Number of Likes: {likeNumber}</div>
            </div>
            <footer>
                <div className="btn-container">
                    {/* Need to add onClick to move the user to the edit post view */}
                    {currentUser.id === parseInt(post.user?.id) ?(
                        <Link to={`/editpost/${postId}`}><button className="btn-like">Edit</button></Link>) : (                           
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