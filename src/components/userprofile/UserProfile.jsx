import { useParams, useNavigate } from "react-router-dom"
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { getNumberOfPosts, getUserProfile } from "../../services/getUserProfile.jsx"

export const UserProfile = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState([])
    const [numberOfPosts, setNumberOfPosts] = useState(0)

    useEffect(() => {
        /* the if statement is to make */
        if (currentUser.id > 0) {
            getUserProfile(userProfileId).then((userProfileArray) => {
                setUserProfile(userProfileArray)}
            )
        }
    }, [currentUser])

    useEffect(() => {
        getNumberOfPosts(currentUser.id).then((postArray) => {
            setNumberOfPosts(postArray.length)
        })
    
    }, [currentUser])


    const { userProfileId } = useParams()
    const navigate = useNavigate()


    const handleClick = () => {
        navigate('/editprofile')
    }

    return (
        <div className="userprofile-container">
            <div className="userprofile-item">{userProfile.fullName}</div>
            <div className="userprofile-item">Cohort :{userProfile.cohort}</div>
            <div className="userprofile-item">Number of Posts :{numberOfPosts}</div>
            {currentUser.id === userProfile.id ? (
                <button onClick={handleClick}>Edit</button>) : (
                "")
            }
            <div className="userprofile-edit"></div>
        </div>
    )
}