import {Component} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Login from "../Auth/Login/Login";
import Button from "bootstrap/js/src/button";


// class Home extends Component {
//
//     render() {
//
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const navigate = useNavigate()
//         // const navigateToLogin = () => {
//         //     navigate("/login", {replace: true});
//         // };
//         function send () {
//             navigate("/login")
//         }
//
//         return (
//             <div className="container">
//                 <h1>CV Gen React App</h1>
//                 <hr/>
//
//
//                 <button onClick={() => send()}>
//                     Login
//                 </button>
//
//             </div>
//         );
//     }
// }
//
// export default Home;


function  Home () {
    return (
        <div>
            <div className="container">
                <h1>CV Gen</h1>
            </div>
            <button>
                <NavLink to="/to"> Logins </NavLink>
            </button>
        </div>
    )
}

export default Home