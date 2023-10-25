import React from 'react'
import Heading from './Sub_Components/Heading'

const Projects = () => {
  return (
    <div id='projects' className='project-main'>
        <Heading text={"My"} colorText={"Projects"}/>

        <div className="project-main__row-1">

            <div className="project-main__row-1__col-1">
            
            </div>

            <div className="project-main__row-1__col-2">
                <div className="project-main__row-1__col-2__img">
                    <img src="" alt="" />
                </div>
                <div className="project-main__row-1__col-2__git"></div>
                <div className="project-main__row-1__col-2__link"></div>
            </div>

            
        </div>



        <div className="project-main__row-2">

            <div className="project-main__row-2__col-1">
            
            </div>

            <div className="project-main__row-2__col-2">
                <div className="project-main__row-2__col-2__img">
                    <img src="" alt="" />
                </div>
                <div className="project-main__row-2__col-2__git"></div>
                <div className="project-main__row-2__col-2__link"></div>
            </div>

            <div className="project-main__row-2__col-3">
            
            </div>
            
        </div>


        <div className="project-main__row-3">

            

            <div className="project-main__row-3__col-1">
                <div className="project-main__row-3__col-1__img">
                    <img src="" alt="" />
                </div>
                <div className="project-main__row-3__col-1__git"></div>
                <div className="project-main__row-3__col-1__link"></div>
            </div>

            <div className="project-main__row-3__col-2">
            
            </div>

            
        </div>
    </div>
  )
}

export default Projects