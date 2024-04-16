import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({currentUser}) => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to='/'>All Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to='/newpost'>New Post</Link>
            </li>
            <li className="navbar-item">
                <Link to='/myposts'>My Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to='/favorites'>Favorites</Link>
            </li>
            <li className="navbar-item">
                <Link to={`/userprofile/${currentUser.id}`}>User Profile</Link>
            </li>

            {localStorage.getItem("learning_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("learning_user")
                        navigate("/login", { replace: true })
                    }}
                    >
                    Logout
                    </Link>
                </li>
                ) : (
                ""
                )}
        </ul>
    )
}