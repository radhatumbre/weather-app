import React from 'react'

const cities = [
    {
        id:1, 
        title:'Mumbai'
    },
    {
        id:2, 
        title:'Delhi'
    },
    {
        id:3, 
        title:'Kolkata'
    },
    {
        id:4, 
        title:'Manipur'
    },
    {
        id:5, 
        title:'London'
    }
]
const TopButton = ({setQuery}) => {
  return (
    <div className='flex items-center justify-between my-6  '>
       {cities.map((city)=>(
        <button onClick={()=>setQuery({q:city.title})} key={city.id}className="text-white text-lg font-medium transition ease-out hover:scale-125">{city.title}</button>
       ))}
    </div>
  )
}

export default TopButton