import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {

    const { id } = useParams()

    const url = 'http://localhost:3000/posts.js'

    const navigate = useNavigate()

    const [singlePost, setSinglePost] = useState({
        id: '',
        title: '',
        content: '',
        image: null,
        tags: []
    })

    useEffect(() => {

        axios.get(`${url}/${id}`)
            .then(res => setSinglePost(res.data))

    }, [id])

    return (
        <div className="container card">
            <h2>{singlePost.title}</h2>
            <img src={singlePost.image} width={'200px'} alt={singlePost.title} />
            <p>{singlePost.content}</p>

            <ul>
                {singlePost.tags.map((e, id) => {
                    return (
                        <li key={id}>{e}</li>
                    )
                })}
            </ul>
            <div className="d-flex justify-space-around">
                <button onClick={() => navigate(-1)}>
                    Torna alla pagina precedente
                </button>
            </div>
        </div>
    )
}

export default SinglePost