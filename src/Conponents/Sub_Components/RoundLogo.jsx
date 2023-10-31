import React from 'react'

const RoundLogo = ({name,source}) => {
  return (
    <div className='skills-card rd-logo'>
        <figure className="rd-logo__outer">
            <img className='skills-card-img rd-logo__outer__img' src={source} alt="" />
            <figcaption className='skills-card-name rd-logo__outer__cap'>{name}</figcaption>
        </figure>
    </div>
  )
}

export default RoundLogo