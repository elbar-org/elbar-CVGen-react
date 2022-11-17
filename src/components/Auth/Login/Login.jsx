import Navbar from "../Navbar";
import {ReactComponent as Img} from "../undraw_fill_form_re_cwyf.svg";

function Login() {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <Img width="85%"/>
                    </div>
                    <div className="col-lg-6">
                        <form className="mt-5 pt-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">PhoneNumber</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;