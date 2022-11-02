import React from "react";
import logo from "../assets/img/logo-navbar.jpeg"

const NavbarApp = ({props}) => {
    return (
        <nav className="bg-stone-600 font-serif">
            <div className="flex justify-between px-5 py-4">
                <img src={logo} className="w-16" />
                <div>
                    
                </div>
                <div className="flex gap-4 pt-3 pr-6 text-white">
                    {props.map((array)=>(
                        <button>{array.nombre}</button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavbarApp