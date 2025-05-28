import { Link, NavLink } from "react-router";
import navbarBg from '../assets/images/more/15.jpg';
import logo from '../assets/images/more/logo1.png'

const NavBar = () => {

    const links = (<div className="space-x-3">
        <NavLink to='/' className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
        } > Home</NavLink>
        <NavLink to='/addCofee' className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
        } > Add Cofee</NavLink>
        <NavLink to='/updateCofee' className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
        } > Update Cofee</NavLink>
        <NavLink to='/users' className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
        } >Users</NavLink>
    </div>)
    return (
        <div >
            <div className="relative">
                <img src={navbarBg} alt="" className="w-full object-cover h-20" />
            </div>
            <div className="absolute top-0 left-0 px-30 w-full h-20 flex items-center justify-between  text-white">

                <div className="navbar">
                    <img src={logo} alt="" className="w-10" />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Espresso Emporium</a>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>
                <div>
                    <Link
                        to='/signup'
                        className="bg-red-600 text-white px-5 py-2 rounded whitespace-nowrap"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;