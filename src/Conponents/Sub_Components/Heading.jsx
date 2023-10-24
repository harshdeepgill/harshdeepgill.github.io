import React from 'react'

const Heading = ({text, colorText}) => {
  return (
    <div className='heading-main'>
        <p className='heading-main__text'>{text} <span>{colorText}</span></p>
    </div>
  )
}

export default Heading