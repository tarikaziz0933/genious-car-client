import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const menuItems = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        {
            user?.uid &&
            <li className='font-semibold'><Link to="/orders">Orders</Link></li>
        }
        <li className='font-semibold'><Link to="/orders">Orders</Link></li>

        <li className='font-semibold'><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar h-32 mb-12 bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={logOut}>Sign Out</button>
                        :
                        <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;