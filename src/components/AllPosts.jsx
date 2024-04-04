import { useEffect, useState } from "react"
import { getAllPosts } from "../services/getAllPosts.jsx"
import "./AllPosts.css"
import { getPostLikes } from "../services/getPostLikes.jsx"
import { PostFilterBar } from "./PostFilterBar.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [postLikes, setPostLikes] = useState([])
    const [dropDownType, setDropDownType] = useState('')
    const [filteredPost, setFilteredPost] = useState([])
    const [displayedPost, setDisplayedPost] = useState([])

    useEffect(() => {
        getAllPosts().then((allPostsArray) => {
            setAllPosts(allPostsArray)
        })
    }, [])

    useEffect(() => {
        getPostLikes().then((allPostLikesArray) => {
            setPostLikes(allPostLikesArray)
        })
    }, [allPosts])


    const postLikeCounter = (post) => {    
        const filteredAllPostLikeArray = postLikes.filter((postLike) => 
            parseInt(post.id) === parseInt(postLike.post.id)
        )
        return filteredAllPostLikeArray.length
    }

    return (
        <div className="allpost-container">
            <div className="title"><h1>Posts</h1></div>
            <PostFilterBar 
                allPosts={allPosts} 
                setDropDownType={setDropDownType}
                dropDownType={dropDownType}
                setFilteredPost={setFilteredPost}
            />

            {filteredPost.map((post) => {
                return ( 
                    <div className="allpost-post" key={post.id}>
                        <div className="allpost-title">
                            {post.title}
                        </div>
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
            })}

        </div>
    )
}