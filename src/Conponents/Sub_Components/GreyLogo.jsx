import React from 'react'
import styled from 'styled-components'

const GreyLogo = ({source, name}) => {
  return (
    <DIV>
        <div className='greylogo__image'>
            <img src={source} alt="" />
        </div>
        <div className='greylogo__text'>
            <p>{name}</p>
        </div>
    </DIV>
  )
}

export default GreyLogo

const DIV = styled.div`
    display: flex;
    gap: 0.7rem;
    justify-content: space-between;
    align-items: center;
    color: rgba(205, 205, 205);
    

    .greylogo__image{
        padding: 0.5rem;

        img{
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    .greylogo__text{
        font-size: 1.2rem;
        letter-spacing: 1px;
    }
`

