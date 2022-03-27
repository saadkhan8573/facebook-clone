import React, { useState } from 'react'
import { MdPhotoLibrary } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { HiEmojiHappy } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../../redux/action';
import { toast } from 'react-toastify';

const CreatePost = () => {
    const [Input, setInput] = useState("")
    const [postImage, setPostImage] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const obj = {
            id: new Date().getTime(),
            text: Input
        }
        Input.length ? dispatch(getUserData(obj)) : toast("Write Some thing")
        setInput("")
    }
    return (
        <>
            <div className="px-4 pt-4 bg-white rounded-md my-6">
                <div className="flex items-center">
                    <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex items-center mx-3 bg-gray-200 rounded-full h-12 w-full px-3">
                        <form onSubmit={handleSubmit} className="w-full">
                            <input className="focus:outline-none bg-transparent mx-2.5 w-full pr-5 placeholder-gray-500" type="text" placeholder="What,s in your mind, Saad?" value={Input} onChange={(e) => setInput(e.target.value)} />
                        </form>
                    </div>
                </div>
                <hr className="mt-5" />
                <div className="flex items-center justify-around py-2">
                    <label htmlFor="imageUpload">
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-md">
                            <MdPhotoLibrary className="text-red-500 text-2xl transform scale-y-110" />
                            <h2 className="font-bold text-black">Photo/Video</h2>
                        </div>
                    </label>
                    <input type="file" id="imageUpload" className="hidden" onChange={(e) => setPostImage(e.target.files[0])} />
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-md">
                        <BsFillPeopleFill className="text-blue-600 text-2xl transform scale-y-110" />
                        <h2 className="font-bold text-black">Tag Friends</h2>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-md">
                        <HiEmojiHappy className="text-yellow-400 text-2xl" />
                        <h2 className="font-bold text-black">Feeling/Activity</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost;