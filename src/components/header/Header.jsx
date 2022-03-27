import React from 'react'
import { FaFacebook, FaSearch, FaBirthdayCake, FaFacebookMessenger } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center h-20 shadow-md px-5 bg-white sticky top-0 z-50">
                <NavLink exact to="/">
                    <FaFacebook className="text-5xl text-blue-500" />
                </NavLink>
                <div className="flex items-center ml-2 bg-gray-200 rounded-full h-12 flex-grow px-3">
                    <FaSearch className="text-xl" />
                    <input type="text" className="focus:outline-none bg-transparent flex-grow mx-2.5" />
                </div>
                <div className="flex-1 mx-8">
                    <ul className="flex">
                        <NavLink exact to="/" className="px-14 border-b-2 border-blue-500 h-20 flex items-center">
                            <li>
                                <AiFillHome className="text-3xl text-blue-500" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-14 h-20 flex items-center">
                            <li>
                                <MdOndemandVideo className="text-3xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-14 h-20 flex items-center">
                            <li>
                                <FaBirthdayCake className="text-3xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-14 h-20 flex items-center">
                            <li>
                                <BsPeopleFill className="text-3xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-14 h-20 flex items-center">
                            <li>
                                <HiOutlineInbox className="text-3xl" />
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-10 h-10 rounded-full object-cover" />
                    <h1 className="font-bold text-black ml-2">Saad</h1>
                    <ul className="flex items-center justify-between">
                        <NavLink exact to="/" className="px-2">
                            <li className="bg-gray-200 rounded-full p-3">
                                <GrAdd className="text-xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-2">
                            <li className="bg-gray-200 rounded-full p-3">
                                <FaFacebookMessenger className="text-xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-2">
                            <li className="bg-gray-200 rounded-full p-3">
                                <IoMdNotifications className="text-xl" />
                            </li>
                        </NavLink>
                        <NavLink exact to="/" className="px-2">
                            <li className="bg-gray-200 rounded-full p-3">
                                <IoMdArrowDropdown className="text-xl" />
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;