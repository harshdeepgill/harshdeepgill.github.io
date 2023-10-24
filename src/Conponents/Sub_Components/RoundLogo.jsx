import React from 'react'

const RoundLogo = ({name,source}) => {
  return (
    <div className='rd-logo'>
        <figure className="rd-logo__outer">
            <img className='rd-logo__outer__img' src={source} alt="" />
            <figcaption className='rd-logo__outer__cap'>{name}</figcaption>
        </figure>
    </div>
  )
}

export default RoundLogo