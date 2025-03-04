import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const ListaDeiPost = () => {

    const [posts, setPosts] = useState([])

    const url = import.meta.env.VITE_ENDPOINT_URL;

    // useEffect(() => {
    //     console.log(url)
    // })

    useEffect(() => {

        axios
            .get(url)
            .then((res) => setPosts(res.data))

    }, [])

    //     fetch(`${url}`, {method: 'GET'})
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data))

    // }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Lista dei post</h1>
                {posts.map((e) => {

                    return (
                        <div key={e.id}>
                            <NavLink className="text-decoration-none" to={`/products/${e.id}`}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{e.title}</h3>
                                        <img src={e.image} width={'200px'} alt="" />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListaDeiPost