import React from 'react'
import loading from '../../assests/planeloading.gif'
const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <img className="img-fluid w-[250px] h-[250px]" src={loading} alt='loading'></img>
      </div>
  )
}

export default Loading