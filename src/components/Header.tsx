import React from 'react'

const Header = (props:{title?:string}) => {
  return (
    <div>
      
      <div
        className="h-[777px] w-full flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://www.example.com/path-to-your-image.jpg)' }}
>
      <div className="p-10 bg-orange-500 bg-opacity-70 text-5xl ">{props.title}</div>
    </div>
    

    </div>
  )
}

export default Header