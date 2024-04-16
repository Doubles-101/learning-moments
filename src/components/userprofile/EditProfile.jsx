import { useEffect, useState } from "react"
import { getPostEditedUserProfile, getUserProfile } from "../../services/getUserProfile.jsx"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getUserProfile(currentUser.id).then((profile) => {
            setUserProfile(profile)
        })
    }, [currentUser])

    const handleSave = () => {
        getPostEditedUserProfile(userProfile).then(
            navigate(`/userprofile/${currentUser.id}`)
        )
    }

    return (
        <form className="userprofile-container">
            <fieldset className="userprofile-item">
                <input 
                    className="name"
                    required
                    type="text"
                    value={userProfile?.fullName}
                    onChange={() => {
                        const profileCopy = {...userProfile}
                        profileCopy.fullName = event.target.value
                        setUserProfile(profileCopy)
                    }}
                />    
            </fieldset>
            <fieldset className="userprofile-item">
                <input 
                    className="cohort"
                    required
                    type="number"
                    value={userProfile?.cohort}
                    onChange={() => {
                        const profileCopy = {...userProfile}
                        profileCopy.cohort = event.target.value
                        setUserProfile(profileCopy)
                    }}
                />    
            </fieldset>
            <button className="userprofile-save"
                    onClick={handleSave} 
                >Save
                </button>
            
        </form>
    )
}