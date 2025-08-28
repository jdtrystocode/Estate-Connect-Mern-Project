import { useState } from "react";
import "./Navbar.scss"
function Navbar()
{
    const [open,setopen] = useState(false)
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
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
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