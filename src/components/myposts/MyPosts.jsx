import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getDeleteMyPost, getMyPosts } from "../../services/getMyPosts.jsx"

export const MyPosts = ({currentUser}) => {
    const [listMyPosts, setListMyPosts] = useState([])

    useEffect(() => {
        getMyPosts(currentUser.id).then((myPostsArray) => {
            setListMyPosts(myPostsArray)
        })

    }, [currentUser])

    const handleDeleteButton = (post) => {
        getDeleteMyPost(post)
        getMyPosts(currentUser.id).then((myPostsArray) => {
            setListMyPosts(myPostsArray)
        })
    }

    return (
        <div className="myposts-container">
            {listMyPosts.map((post) => {
                return (<div className="myposts-item" key={post.id}>
                    <Link to={`/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                        <button
                            onClick={event => handleDeleteButton(post.id)}    
                        >Delete</button>
                </div>)
            })}
        </div>
    )
}