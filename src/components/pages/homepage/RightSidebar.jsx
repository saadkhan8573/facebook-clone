import React from 'react'
import { IoIosPeople } from 'react-icons/io';
import { NavLink } from 'react-router-dom'
import { MdOndemandVideo, MdKeyboardArrowDown } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import { BsPeopleFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const RightSidebar = () => {
    return (
        <>
            <div className="p-5 sticky left-0 top-20 h-screen overflow-auto">
                <h1 className="font-bold text-gray-600 text-xl">Suggested</h1>
                <div className="rounded">
                    <div className="rounded-t" style={{ backgroundImage: "url('https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300')" }}>
                        <div className="w-full p-7">
                            <div className="flex items-center gap-3">
                                <IoIosPeople className="text-xl bg-white rounded-full p-1" />
                                <h1 className="text-white font-bold">Groups</h1>
                            </div>
                            <p className="w-40 text-white my-2">New Ways to find and join communities</p>
                            <button className="bg-white rounded px-5 py-2">Find Your Groups</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md flex items-center px-4 h-12 rounded-b">
                        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-6 h-6 border-2 border-white rounded-full object-cover" />
                        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-6 h-6 border-2 border-white -ml-3 rounded-full object-cover" />
                        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-6 h-6 border-2 border-white -ml-3 rounded-full object-cover" />
                        <p className="text-sm px-2">Saad and 9 friends joined group</p>
                    </div>
                </div>

                <div className="mt-3 flex justify-between items-center ">
                    <h1 className="text-gray-600 font-bold">Contacts</h1>
                    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                        <IoEllipsisHorizontalSharp />
                    </div>
                </div>

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
                </ul>
            </div>
        </>
    )
}

export default RightSidebar