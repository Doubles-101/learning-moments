import { useEffect, useState } from "react"
import "./EditPost.css"
import { getTopics } from "../../services/getTopics.jsx"
import { getPostDetails, getPutPostDetails } from "../../services/getPostDetails.jsx"
import { useParams, useNavigate} from "react-router-dom"

export const EditPost = ({currentUser}) => {
    const [currentPost, setCurrentPost] = useState({
        title: "",
        body: "",
        topicId: 0,
        date: 0,
        userId: 0,
        id: 0
    })
    const [currentTopics, setCurrentTopics] = useState([])

    const { editPostId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getTopics().then((topicArray) => {
            setCurrentTopics(topicArray)
        })
    }, [])

    useEffect(() => {
        getPostDetails(editPostId).then((postArray) => {
            const postObj = postArray[0]  
            setCurrentPost(postObj)
        })
    }, [editPostId])


    const handleSaveClick = () => {
        getPutPostDetails(currentPost).then(
            navigate("/myposts")
        )
    }

    return (
        <form className="editpost-container">
            <header><h1>Edit Post</h1></header>
            <div className="editpost-body">
                <fieldset className="editpost-item">
                    <input 
                        className="title"
                        required
                        type="text"
                        value={currentPost?.title}
                        onChange={() => {
                            const postCopy = {...currentPost}
                            postCopy.title = event.target.value
                            setCurrentPost(postCopy)
                        }}
                    />
                </fieldset>
                <fieldset className="editpost-topic">
                    <select required id="topic" 
                        onChange={() => {
                            const postCopy = {...currentPost}
                            postCopy.topicId = parseInt(event.target.value)
                            setCurrentPost(postCopy)
                        }}>
                        <option value={0}>Please Select a Topic</option>
                        {currentTopics.map((topic) => {
                            return <option key={topic.id} value={topic.id}>{topic.type}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset className="editpost-body">
                    <textarea  
                        className="body"
                        required
                        placeholder="Please Insert Body"
                        value={currentPost?.body}
                        onChange={() => {
                            const postCopy = {...currentPost}
                            postCopy.body = event.target.value
                            setCurrentPost(postCopy)
                        }}
                    />
                </fieldset>
            </div>
            <footer>
                <button className="editpost-save"
                    onClick={handleSaveClick}
                    
                >Save
                </button>
            </footer>
        </form>
    )
}