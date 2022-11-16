import {Component} from "react";
import {Link} from "react-router-dom";
import Login from "../Auth/Login/Login";

class Home extends Component {
    render() {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const navigate = useNavigate();
        //
        // const navigateToLogin = () => {
        //     navigate("/login", {replace: true});
        // };

        return (
            <div className="container">
                <h1>CV Gen React App</h1>
                <hr/>

                <Link to="../Auth/Login/Login">Login</Link>

                {/*<button onClick={navigateToLogin}>Login</button>*/}
                {/*<Routes>*/}
                {/*    <Route path="/login" element={<Login/>}/>*/}
                {/*    <Route path="/register"/>*/}
                {/*</Routes>*/}

            </div>
        );
    }
}

export default Home;