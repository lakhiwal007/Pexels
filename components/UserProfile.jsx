import React from 'react'
import ProfilePic from './ProfilePic'
import { RiPencilFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const UserProfile = () => {
    return (
        <div className='w-full p-0 m-0'>
            <div className='w-full p-0 m-0 flex flex-col items-center justify-center mt-8'>
                <ProfilePic width={130} height={130} />
                <p className='text-6xl text-gray-800'>Ankit Lakhiwal</p>
                <button className='flex items-center bg-pexels pt-3 pb-3 pl-4 pr-4 rounded-md text-white font-normal mt-8'> <span className='pr-2 text-2xl'><RiPencilFill /></span> Edit Profile</button>

                <div className='flex text-xl text-gray-400'>
                    <ul className='flex mt-8'>
                        <li className='flex items-center cursor-pointer'>
                            <HiOutlineLocationMarker />
                            <span className='ml-2'>India</span>
                        </li>
                        <li className='flex items-center cursor-pointer ml-4'>
                            <FaInstagram />
                            <span className='ml-2'>lakhi0709</span>
                        </li>
                    </ul>
                </div>

                <div className='flex mt-8'>
                    <ul className='flex items-center'>
                        <li className='flex flex-col items-center pr-8'>
                            <p className='text-gray-400'>Total Views</p>
                            <p className='text-xl'>8K</p>
                        </li>
                        <li className='text-gray-300'>|</li>
                        <li className='flex flex-col items-center pr-8 pl-8'>
                            <p className='text-gray-400'>All-time rank</p>
                            <p className='text-xl'>63.2K</p>
                        </li>
                        <li className='text-gray-300 mr-4'>|</li>
                        <li className='flex flex-col items-center'>
                            <p className='text-gray-400'>30-day rank</p>
                            <p className='text-xl'>17.8K</p>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex items-center justify-between mt-8'>
                    <div className='w-full bg-white'>
                        <ul className='w-full flex items-center justify-center p-16 text-lg'>
                            <li className='pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full'>
								Gallery <span className='pl-2'>21</span></li>
                            <li className='pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full'>
								Collections <span className='pl-2'>0</span></li>
                            <li className='pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full'>
								Statistics <span className='pl-2'>0</span></li>
                            <li className='pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full'>
								Followers <span className='pl-2'>0</span></li>
                            <li className='pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full'>
								Following <span className='pl-2'>0</span></li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <ul className='w-full flex items-center'>
                            <li className='flex items-center text-lg bg-white border pr-6 pl-8 pt-4 pb-4 border-gray-300 rounded-md cursor-pointer mr-4'>
                                Photos & Videos
                                <MdKeyboardArrowDown className='text-xl ml-2' />
                            </li>
                            <li className='flex items-center text-lg bg-white border pr-6 pl-8 pt-4 pb-4 border-gray-300 rounded-md cursor-pointer'>
                                Recency
                                <MdKeyboardArrowDown className='text-xl ml-2' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile