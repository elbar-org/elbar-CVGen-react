import './static/Home.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import { ReactComponent as Logo } from "./static/undraw_online_cv_re_gn0a.svg";
import Navbar from "../Auth/Navbar";

function Home () {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <h1>CV Gen</h1>
                <button className="btn btn-dark">
                    <NavLink className="login-btn" to="/login">Login</NavLink>
                </button>
                <button className="btn btn-dark">
                    <NavLink className="login-btn" to="/register">Register</NavLink>
                </button>
            </div>
            {/*<Logo/>*/}
        </div>
    )
}

export default Home