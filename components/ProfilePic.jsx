import React from 'react'
import Image from 'next/image'
const ProfilePic = ({width, height}) => {
  return (
    <div className="flex items-center justify-center bg-pexels  rounded-full p-0">
        <Image src="/../public/images/user_default.png" width={width} height={height} className='object-cover rounded-full' alt=''></Image>
    </div>
  )
}

export default ProfilePic