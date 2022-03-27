import React from 'react';
import { GrAdd } from "react-icons/gr";
import { StoriesData } from './Data';

const HomePageData = () => {
    return (
        <>
            <div className="flex justify-between">
                {
                    StoriesData.map((data, index) => (
                        <div className="relative h-52 rounded cursor-pointer">
                            {/* background Overlay */}
                            <div className="w-full h-52 bg-gray-600 absolute top-0 left-0 rounded" style={{backgroundColor : "#00000060"}}></div>
                            <img className="w-32 h-52 object-cover rounded" src={`https://source.unsplash.com/collection/${index}/1600x900`} alt="User Image" />
                            <div className={`bg-gray-200 max-w-max border-2 border-white ml-2 rounded-full absolute top-2 ${index === 0 && 'p-3'}`}>
                                {index === 0 ? data.icon : <img className="w-12 h-12 object-cover rounded-full bg-blend-screen	" src={`https://source.unsplash.com/collection/${index+1}/1600x900`} alt="User Image" />}
                            </div>
                            <p className="text-white font-bold mx-2 absolute bottom-2">{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HomePageData;