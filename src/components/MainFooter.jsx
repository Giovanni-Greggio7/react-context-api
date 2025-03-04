import { Link, NavLink } from 'react-router-dom';
import img1 from "../assets/react.svg"

function MainFooter () {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                <NavLink to="/" className="nav-link" aria-current="page">
                        <img src={img1} alt="" />
                    </NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">
                                    Homepage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" aria-current="page">
                                    Chi siamo
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/products" className="nav-link" aria-current="page">
                                    Lista dei post
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    );
}

export default MainFooter