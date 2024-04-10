import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/getAllPosts.jsx"
import "./AllPosts.css"
import { getPostLikes } from "../../services/getPostLikes.jsx"
import { PostFilterBar } from "./PostFilterBar.jsx"
import { Post } from "./Post.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [postLikes, setPostLikes] = useState([])
    const [dropDownType, setDropDownType] = useState('')
    const [filteredPost, setFilteredPost] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

    useEffect(() => {
        const foundPost = allPosts.filter((post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredPost(foundPost)
    }, [searchTerm, allPosts])



    

    return (
        <div className="allpost-container">
            <div className="title"><h1>Posts</h1></div>
            <PostFilterBar 
                allPosts={allPosts} 
                setDropDownType={setDropDownType}
                dropDownType={dropDownType}
                setFilteredPost={setFilteredPost}
                setSearchTerm={setSearchTerm}
            />

            {filteredPost.map((post, i) => {
                return <Post post={post} key={i} postLikes={postLikes} />
            })}

        </div>
    )
}