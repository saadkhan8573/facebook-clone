import React, { useState } from 'react'
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';
import { AiTwotoneLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiFillCamera, AiOutlineGif } from 'react-icons/ai';
import { FaRegStickyNote } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../../redux/action';

const Posts = () => {
    const [comment, setComment] = useState("")
    const [likes, setlikes] = useState(false)
    const { userPosts } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleComment = (event, id) => {
        event.preventDefault()
        const comm = {
            id: id,
            name: "Saad",
            comment: comment
        }
        dispatch(postComment(comm))
        setComment("")
    }

    const handleLike = (id) => {
        const postsID = userPosts.find(val => val.id === id)
        console.log(postsID)
        if (postsID) {
            setlikes(!likes)
        }
    }

    return (<>
        {
            userPosts.map((data, index) => {
                return (<>
                    <div className="bg-white rounded-md mb-5" key={index}>
                        <div className="flex justify-between items-center p-4">
                            <div className="flex items-center gap-3">
                                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h2 className="font-bold text-black">Saad Mushtaq</h2>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-gray-400">5 hrs</p>
                                        <p className="text-sm text-gray-500"> • </p>
                                        <BsFillPeopleFill className="text-sm text-gray-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                                <IoEllipsisHorizontalSharp />
                            </div>
                        </div>

                        <h4 className="mx-5 mb-3">{data.text}</h4>

                        <img className="w-full" src={`https://source.unsplash.com/collection/${data.id}/1600x900`} alt="Post Image" />

                        <p className="text-gray-500 text-right mr-4 my-3">1 Comment</p>
                        <hr />
                        <div className="flex items-center justify-around py-1">
                            <div onClick={() => handleLike(data.id)} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-md">
                                {likes ? <AiTwotoneLike className="text-2xl text-blue-800 transform scale-y-110" /> :
                                    <BiLike className="text-2xl transform scale-y-110" />}
                                <h2 className="font-bold text-black">Like</h2>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-md">
                                <GoComment className="text-2xl transform scale-y-110" />
                                <h2 className="font-bold text-black">Comment</h2>
                            </div>
                        </div>
                        <hr />

                        {/* Comments */}
                        {
                            data.comments?.map((comment) => {
                                return (<>
                                    <div className="flex gap-3 px-4 py-1.5">
                                        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <div className="flex gap-2 bg-gray-200 rounded-full py-2 px-5">
                                                <h2 className="font-bold text-blue-800 cursor-pointer">{comment.name}</h2>
                                                <p>{comment.comment}</p>
                                            </div>
                                            <div className="flex items-center gap-2 ml-5 my-1">
                                                <p className="text-blue-800 cursor-pointer">Like</p>
                                                <p className="text-sm text-gray-500"> • </p>
                                                <p className="text-blue-800 cursor-pointer">Reply</p>
                                                <p className="text-sm text-gray-500"> • </p>
                                                <p>1m</p>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })
                        }

                        {/* Submit Yout Comment */}
                        <div className="flex items-center px-4 py-3">
                            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="User Image" className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex items-center mx-3 bg-gray-200 rounded-full h-12 flex-grow px-3">
                                <form className="flex-grow" onSubmit={(e) => handleComment(e, data.id)}>
                                    <input className="focus:outline-none bg-transparent flex-grow mx-2.5 placeholder-gray-500" type="text" placeholder="Write a Comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                                </form>
                                <div className="flex items-center gap-3">
                                    <HiOutlineEmojiHappy className="text-2xl text-gray-500 cursor-pointer" />
                                    <AiFillCamera className="text-2xl text-gray-500 cursor-pointer" />
                                    <AiOutlineGif className="text-xl text-gray-500 cursor-pointer border-2 border-gray-500 rounded-md" />
                                    <FaRegStickyNote className="text-2xl text-gray-500 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            })
        }
    </>)

}

export default Posts