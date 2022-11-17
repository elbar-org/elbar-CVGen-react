import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/to" element={<Login/>}/>
        </Routes>
    );
}


export default App;
