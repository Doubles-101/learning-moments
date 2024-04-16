import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/posts/AllPosts.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
import { useState, useEffect } from "react"
import { PostDetails } from "../components/posts/PostDetails.jsx"
import { NewPost } from "../components/newposts/NewPost.jsx"
import { MyPosts } from "../components/myposts/MyPosts.jsx"
import { EditPost } from "../components/editposts/EditPost.jsx"
import { Favorites } from "../components/favorites/Favorites.jsx"
import { UserProfile } from "../components/userprofile/UserProfile.jsx"
import { EditProfile } from "../components/userprofile/EditProfile.jsx"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user")
    const learningUserObject = JSON.parse(localLearningUser)
    setCurrentUser(learningUserObject)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar currentUser={currentUser}/>
                    <Outlet />
                </>} 
                >
                <Route index element={<AllPosts />} />
                <Route path=":postId" element={<PostDetails currentUser={currentUser}/>} />
                <Route path="newpost" element={<NewPost currentUser={currentUser} />} />
                <Route path="myposts" element={<MyPosts currentUser={currentUser} />} />
                <Route path="editpost">
                    <Route path=":editPostId" element={<EditPost currentUser={currentUser}/>} />
                </Route>
                <Route path="favorites" element={<Favorites currentUser={currentUser} />} />
                <Route path="userprofile">
                    <Route path=":userProfileId" element={<UserProfile currentUser={currentUser} />} />
                </Route>
                <Route path="editprofile" element={<EditProfile currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}