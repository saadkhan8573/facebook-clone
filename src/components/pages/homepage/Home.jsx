import React, { useState } from 'react'
import CreatePost from './CreatePost'
import Stories from './Stories'
import LeftSidebar from './LeftSidebar'
import Posts from './Posts'
import RightSidebar from './RightSidebar'
import { GrAdd } from "react-icons/gr";


const Home = () => {
    var std = {
        
    }
  
    return (
        <>
            <div className="flex ">
                <div style={{ flex: "0.25" }}>
                    <LeftSidebar />
                </div>
                <div className="p-5" style={{ flex: "0.5" }}>
                    <Stories />
                    <CreatePost />
                    <Posts />
                </div>
                <div style={{ flex: "0.25" }}>
                    <RightSidebar />
                </div>
            </div>
        </>
    )
}

export default Home;