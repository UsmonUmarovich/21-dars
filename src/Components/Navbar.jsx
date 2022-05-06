import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
