import React from 'react'

const ProfilePicture = ({ avatar }) => {
  return (
    <div className='w-full flex items-center gap-x-4'>
        <div>
            <label htmlFor="">
                {avatar ? (
                    <img src={avatar} alt="" />
                )}
            </label>
            <input type="file" className='sr-only' />
        </div>
        <button type='button'>Delete</button>
    </div>
  )
}

export default ProfilePicture