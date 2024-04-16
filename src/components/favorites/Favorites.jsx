import { useEffect, useState } from "react"
import "./Favorites.css"
import { getFavorites, getRemoveFavorite } from "../../services/getFavorites.jsx"
import { Link } from "react-router-dom"

export const Favorites = ({currentUser}) => {
    const [listFavorites, setListFavorites] = useState([])


    useEffect(() => {
        getFavorites(currentUser.id).then((favArray) => {
            setListFavorites(favArray)
        })
    }, [currentUser])

    const handleRemove = (id) => {
        getRemoveFavorite(id).then(
            getFavorites(currentUser.id).then((favArray) => {
                setListFavorites(favArray)})
            )
    }

    return (
        <div className="favorites-container">
            {listFavorites.map((favorite) => {
                return <div className="favorites-item" key={favorite.id}>
                    <Link to={`/${favorite.post.id}`}>
                        <h2>{favorite.post.title}</h2>
                    </Link>
                    <button onClick={() => {handleRemove(favorite.id)}}>Remove</button>
                </div>
            })}
        </div>
    )
}