import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";

const Home = () => {

  const scrollFr = useSelector(store => store.scrollFr)

  console.log(scrollFr)

  return (
    <DIV opacity={Math.min(scrollFr*3.7, 1)} id='home'  className='home-main'>
      <div className='home-main__content'>
        <div className='home-main__content_1'>
          <div className='home-main__content_1--big_text'>
            <span span={13-(Math.min(43.33*scrollFr, 13))}>Gill</span>
            <SPAN2 span2={-15+(Math.min(66.67*scrollFr, 22))}  id="user-detail-name">Harshdeep</SPAN2>
          </div>
        </div>
        
        <div className="home-main__content_2">
            <div className="home-main__content_2__outer">
                <div className="home-main__content_2__outer_1">
                    <img className='home-img' src="https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2FSquare%20dp.jpg?alt=media&token=d10b367d-b3c9-45aa-86f9-36447dc5b6d8&_gl=1*12e0fsr*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5ODA5MTc2Mi4zNi4xLjE2OTgwOTE3NzQuNDguMC4w" alt="dp" />
                </div>
                <p >I'm Harshdeep, a passionate <span>fullstack web developer</span>. Specialized in <span>MERN stack</span> with <span>1500+</span> hours of hands on programming experience.</p>
            </div>
        </div>
      </div>
    </DIV>
  )
}

export default Home

const DIV = styled.div`
  background-color: rgba(22,22,22, ${props => props.opacity});
`

// const SPAN1 = styled.span`
//   transition: all 350ms ease;
//   transform: translateX(${props => props.span1}%);
// ` 


const SPAN2 = styled.span`
  transition: all 250ms ease;
  transform: translateX(${props => props.span2}%);
`
