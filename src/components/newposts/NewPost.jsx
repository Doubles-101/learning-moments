import { useEffect, useState } from "react"
import { getTopics } from "../../services/getTopics.jsx"
import { getPostNewPost } from "../../services/getPostNewPost.jsx"
import { useNavigate } from "react-router-dom"

export const NewPost = ({currentUser}) => {
    
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        topicId: 0,
        date: 0,
        userId: 0
    })
    const [currentTopics, setCurrentTopics] = useState([])

    const [userTitle, setUserTitle] = useState('')
    const [userTopic, setUserTopic] = useState('')
    const [userBody, setUserBody] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        getTopics().then((topicArray) => {
            setCurrentTopics(topicArray)
        })
    }, [])

    const handleTopicChoice = (event) => {
        console.log(`${event}`)
        setUserTopic(event)
    }

    const handleBodyChoice = (event) => {
        setUserBody(event)
    }

    const handleSaveClick = (event) => {
        event.preventDefault()

        if(userTopic !== '' && userTitle !== '' && userBody !== '') {
            const postObject = {
                title: userTitle,
                body: userBody,
                topicId: userTopic,
                date: new Date(),
                userId: currentUser.id
            }
    
            getPostNewPost(postObject)
            navigate(`/myposts`)
        } else {
            window.alert("Please enter ALL the fields")
        }

    }

    return (
        <form className="newpost-container">
            <header><h1>New Post</h1></header>
            <div className="newpost-body">
                <fieldset className="newpost-item">
                    <input 
                        className="title"
                        required
                        placeholder="Please Insert Title"
                        type="text"
                        value={userTitle}
                        onChange={(event) => {setUserTitle(event.target.value)}}
                    />
                </fieldset>
                <fieldset className="newpost-topic">
                    <select required id="topic" onChange={(event) => {handleTopicChoice(parseInt(event.target.value))}}>
                        <option value={0}>Please Select a Topic</option>
                        {currentTopics.map((topic) => {
                            return <option key={topic.id} value={topic.id}>{topic.type}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset className="newpost-body">
                    <textarea  
                        className="body"
                        required
                        placeholder="Please Insert Body"
                        value={userBody}
                        onChange={(event) => {handleBodyChoice(event.target.value)}}
                    />
                </fieldset>
            </div>
            <footer>
                <button className="newpost-save"
                    onClick={handleSaveClick}
                    
                >Save
                </button>
            </footer>
        </form>
    )
}