import { useEffect, useState } from "react"


export const PostFilterBar = ({allPosts, setDropDownType, setFilteredPost, dropDownType}) => {
 
   
    useEffect(() => {
        let filterIdSelected = parseInt(dropDownType)

        if(filterIdSelected === 0) {
            setFilteredPost(allPosts)
        } else if (filterIdSelected === 1) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 1)
            setFilteredPost(filteredArray)
        } else if (filterIdSelected === 2) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 2)
            setFilteredPost(filteredArray)
        } else if (filterIdSelected === 3) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 3)
            setFilteredPost(filteredArray)
        } else if (filterIdSelected === 4) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 4)
            setFilteredPost(filteredArray)
        } else if (filterIdSelected === 5) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 5)
            setFilteredPost(filteredArray)
        } else if (filterIdSelected === 6) {
            const filteredArray = allPosts.filter(post => parseInt(post.topic.id) === 6)
            setFilteredPost(filteredArray)
        } else {
            setFilteredPost(allPosts)
        }
    }, [dropDownType, allPosts])



    return (
        <div className="filter-bar">
            <select id="filter" onChange={event => setDropDownType(event.target.value)}>
                <option value={0} id="0">All Posts</option>
                {allPosts.map((post) => {
                   return <option value={post.topic.id} id={post.topic.type}>{post.topic.type}</option>
                })}
            </select>
        </div>
    )
}