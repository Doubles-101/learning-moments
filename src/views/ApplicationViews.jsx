import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/posts/AllPosts.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
import { useState, useEffect } from "react"
import { PostDetails } from "../components/posts/PostDetails.jsx"

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
                    <NavBar />
                    <Outlet />
                </>} 
                >
                <Route index element={<AllPosts />} />
                <Route path=":postId" element={<PostDetails currentUser={currentUser}/>} />
            </Route>
        </Routes>
    )
}