import { useState } from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
function Navbar()
{
    const [open,setopen] = useState(false);
    const user = true;
    return(
        <nav>
            <div className="left">
            <a href="/" className="logo">
                <img src="./logo.png" alt="" />
                <span>Estate Connect</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? (<div className="user">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Rohit Sharma</span>
                    <Link to ="/profile" className="profile">Profile
                    <div className="notification">3</div>
                    <span>Profile</span>
                    </Link>
                </div>) : (<><a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a></>)}
                <div className="menuicon">
                    <img src="menu.png" alt="" onClick={()=>setopen((prev)=>!prev)}/>
                </div>
                <div className= {open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;