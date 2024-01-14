import React from 'react'

function ShakeHands({imageSrc,altTxt,children}) {
  return (
    <div>
      <img src={imageSrc} alt={altTxt}/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ShakeHands