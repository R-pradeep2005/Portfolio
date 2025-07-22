import React from 'react'
 


const Map_Card = () => {
  const Api_Key= import.meta.env.VITE_API_KEY  
  return (
    <div className='mt-8 w-full'><iframe
  width="100%"
  height="380"
  style={{borderRadius:'20px',}}  
  src={`https://www.google.com/maps/embed/v1/place?key=${Api_Key}
    &q=Karapakkam, Chennai, Tamil Nadu 600097`}>
</iframe> 
      
    </div>
  )
}

export default Map_Card
