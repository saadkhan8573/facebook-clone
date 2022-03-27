import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOndemandVideo, MdKeyboardArrowDown } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import { BsPeopleFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const LeftSidebar = () => {
    return (
        <>
            <div className="m-5 sticky left-0 top-24">
                <ul className="flex flex-col gap-y-6 border-b border-gray-400 pb-5">
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-10 h-10 rounded-full object-cover" />
                            <h1 className="font-bold text-black">Saad Mushtaq</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <MdOndemandVideo className="text-3xl text-blue-500" />
                            <h1 className="font-bold text-black">Watch</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <RiCalendarEventFill className="text-3xl text-red-700" />
                            <h1 className="font-bold text-black">Events</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <BsPeopleFill className="text-3xl text-blue-500" />
                            <h1 className="font-bold text-black">Friends</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <FcAlarmClock className="text-3xl" />
                            <h1 className="font-bold text-black">Memories</h1>
                        </li>
                    </NavLink>
                    <li className="flex items-center justify-center gap-4 w-full bg-gray-200 h-9 rounded cursor-pointer">
                        <button>See More</button>
                        <MdKeyboardArrowDown />
                    </li>
                </ul>

                <div className="mt-3 flex justify-between items-center ">
                    <h1 className="text-gray-600 font-bold">Shortcuts</h1>
                    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                        <IoEllipsisHorizontalSharp />
                    </div>
                </div>

                <ul className="flex flex-col gap-y-6 border-b border-gray-400 pb-5 mt-4">
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-10 h-10 rounded-full object-cover" />
                            <h1 className="font-bold text-black">Save the Pomeroy Theatre</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <MdOndemandVideo className="text-3xl text-blue-500" />
                            <h1 className="font-bold text-black">Weekend Trips</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <RiCalendarEventFill className="text-3xl text-red-700" />
                            <h1 className="font-bold text-black">Jasper's Market</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <BsPeopleFill className="text-3xl text-blue-500" />
                            <h1 className="font-bold text-black">Red Table Talk Group</h1>
                        </li>
                    </NavLink>
                    <NavLink exact to="/">
                        <li className="flex items-center gap-4">
                            <FcAlarmClock className="text-3xl" />
                            <h1 className="font-bold text-black">Best Hidden Hiking Trails</h1>
                        </li>
                    </NavLink>
                    <li className="flex items-center justify-center gap-4 w-full bg-gray-200 h-9 rounded cursor-pointer">
                        <button>See More</button>
                        <MdKeyboardArrowDown />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftSidebar;