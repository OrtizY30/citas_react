import React from 'react'

const Error = ({children}) => {
    return (
        <div className='w-full p-3 mb-5 bg-red-500 rounded-md text-center font-bold uppercase text-white'>
            <p>{children}</p>
        </div>
    )
}

export default Error
