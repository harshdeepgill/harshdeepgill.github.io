import React from 'react'
import Heading from './Sub_Components/Heading'

const Github = () => {
  return (
    <div className='github-main'>
        <Heading text={"Github"} colorText={"Stats"}/>

        <div className="guthub-main__outer">
            <div  className="github-main__outer__inner">
            <a href="https://git.io/streak-stats"><img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=harshdeepgill&theme=merko&border_radius=10" alt="GitHub Streak" /></a>
            </div>
            <div className="github-main__outer__inner">
            <img id="github-stats-card" class="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=harshdeepgill&amp;theme=merko&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=false&amp;border_radius=10" alt="Github Stats Image"/>
            </div>
            <div className="github-main__outer__inner">
            <img id="github-top-langs" class="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshdeepgill&amp;theme=merko&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=true&amp;border_radius=10"/>
            </div>
        </div>
        
    </div>
  )
}

export default Github