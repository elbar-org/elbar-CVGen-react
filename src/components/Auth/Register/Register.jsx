import Navbar from "../Navbar";
import {ReactComponent as Img} from "../undraw_fill_form_re_cwyf.svg";

function Register() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <Img width="85%"/>
                    </div>
                    <div className="col-lg-6">
                        <form className="mt-5 pt-5">
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="phoneHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">FirstName</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">LastName</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <label htmlFor="Language" className="form-label">Choose Language</label>
                            <select className="form-select mb-3" aria-label="Default select example" id="Language">
                                <option selected>None</option>
                                <option value="English">English</option>
                                <option value="Russia">Russia</option>
                                <option value="Uzbek">Uzbek</option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;