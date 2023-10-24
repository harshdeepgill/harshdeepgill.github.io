import React from 'react'

const HorizontalScroll = ({children}) => {
  return (
    <div className='ho_sc_main'>
        <div className="ho_sc_main__outer">
            <div className="ho_sc_main__outer__inner">
                {children}
            </div>
        </div>
        <div className="ho_sc_main__outer">
            <div className="ho_sc_main__outer__inner">
                {children}
            </div>
        </div>
    </div>
  )
}

export default HorizontalScroll