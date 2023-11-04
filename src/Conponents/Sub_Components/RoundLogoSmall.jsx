import React from 'react'

const RoundLogoSmall = ({name,source}) => {
  return (
    <div className='rd-logo-sm'>
        <figure className="rd-logo-sm__outer">
            <img className=' rd-logo-sm__outer__img' src={source} alt="" />
            <figcaption className=' rd-logo-sm__outer__cap'>{name}</figcaption>
        </figure>
    </div>
  )
}

export default RoundLogoSmall