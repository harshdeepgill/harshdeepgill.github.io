import React from 'react'
import Heading from './Sub_Components/Heading';
import { FaGlobe, FaGithub } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import RoundLogoSmall from './Sub_Components/RoundLogoSmall';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Projects = () => {

    const scrollFr = useSelector(store => store.scrollFr);
      
  return (
    <div id='projects' className='project-main'>
        <Heading text={"My"} colorText={"Projects"}/>

        <div className="project-card project-main__row-1">

            <div className="project-main__row-1__col-1">
                <div>
                    <h2 className='project-title' style={{textAlign:"center", letterSpacing:"3px"}}>#ONFLICK</h2>
                    <p className='project-description'>Onflick is a ecommerce website which allows user to create account, whish list, add to cart and experiance smooth intrface.</p>
                    <p>#Team-Project #Ecommerce #Payment #Authentication #Admin</p>
                    <div className='project-tech-stack'>
                        <RoundLogoSmall name="React" source="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"/>
                        <RoundLogoSmall name="Redux" source="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"/>
                        <RoundLogoSmall name="Styled Components" source="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_styled_icon_130142.png"/>
                        <RoundLogoSmall name="Chakra UI" source="https://www.coffeeclass.io/logos/chakra-ui.png"/>
                    </div>
                </div>
            </div>

            <div className="project-main__row-1__col-2">
                <div>
                    <div className="project-main-git-link project-main__row-1__col-2__git">
                    <a target='_blank' className="project-github-link" href="https://github.com/harshdeepgill/decisive-duck-1364"><FaGithub/></a>
                    </div>
                    <div className="project-main-git-link project-main__row-1__col-2__link">
                    <a target='_blank' className="project-deployed-link" href="https://decisive-duck-1364-9rnayblsd-vk10082000.vercel.app/"><FaGlobe/></a>
                    </div>
                </div>
            </div>

            
        </div>



        <div className="project-card project-main__row-2">

            <DIV spinVal={scrollFr*55} className="project-main__row-2__col-1">
                <div>
                    <h1>Let's Colaborate</h1>
                    <BsArrowDownRight style={{fontSize:"3rem"}}/>
                </div>
            </DIV>
            <div className="project-main__row-2__col-2">
                <div>
                    <div className="project-main-git-link project-main__row-2__col-2__git">
                    <a target='_blank' className="project-github-link" href="https://github.com/harshdeepgill/late-trousers-7947"><FaGithub/></a>
                    </div>
                    <div className="project-main-deploy-link project-main__row-2__col-2__link">
                    <a target='_blank' className="project-deployed-link" href="https://hilarious-paletas-40d5fe.netlify.app/"><FaGlobe/></a>
                    </div>
                </div>
            </div>

            <div className="project-main__row-2__col-3">
            <div>
                    <h2 className='project-title' style={{textAlign:"center", letterSpacing:"3px"}}>#WandaWe</h2>
                    <p className='project-description'>Wanda We is a travel booking website which offers vairous packages and alow user to filter and sort products.</p>
                    <p>#Solo-Project #Filters #Form-handleing</p>
                    <div className='project-tech-stack'>
                        <RoundLogoSmall name="HTML 5" source="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"/>
                        <RoundLogoSmall name="CSS 3" source="https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png"/>
                        <RoundLogoSmall name="Java Script" source="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png"/>
                    </div>
                </div>
            </div>
            
        </div>


        <div className="project-card project-main__row-3">

            

            <div className="project-main__row-3__col-1">
            <div>
                    <h2 className='project-title' style={{textAlign:"center", letterSpacing:"3px"}}>#MoneyMingle</h2>
                    <p className='project-description'>Money Mingle is a Fin-Tech website which allows user to make transactions in vairous currencies, along with money conversion functionalities. Also we provide a dashboard to manage expenses.</p>
                    <p>#Team-Project #Fin-tech #Authentication #Admin </p>
                    <div className='project-tech-stack'>
                        <RoundLogoSmall name="HTML 5" source="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"/>
                        <RoundLogoSmall name="CSS 3" source="https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png"/>
                        <RoundLogoSmall name="Java Script" source="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png"/>
                    </div>
                </div>
            </div>

            <div className="project-main__row-3__col-2">
                <div>
                    <div className="project-main-git-link project-main__row-3__col-1__git">
                    <a className="project-github-link" target='_blank' href="https://github.com/Tapishagrawal/near-steel-1499"><FaGithub/></a> 
                    </div>
                    <div className="project-main-deploy-link project-main__row-3__col-1__link">
                    <a className="project-deployed-link" target='_blank' href="https://6545be83a334a938efc3c62d--fastidious-parfait-63739a.netlify.app/"><FaGlobe/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-card project-main__row-3">

            

            <div className="project-main__row-3__col-1">
            <div>
                    <h2 className='project-title' style={{textAlign:"center", letterSpacing:"3px"}}>#MoneyMingle</h2>
                    <p className='project-description'>Money Mingle is a Fin-Tech website which allows user to make transactions in vairous currencies, along with money conversion functionalities. Also we provide a dashboard to manage expenses.</p>
                    <p>#Team-Project #Fin-tech #Authentication #Admin </p>
                    <div className='project-tech-stack'>
                    <RoundLogoSmall name="HTML 5" source="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"/>
                        <RoundLogoSmall name="CSS 3" source="https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png"/>
                        <RoundLogoSmall name="Java Script" source="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png"/>
                    </div>
                </div>
            </div>

            <div className="project-main__row-3__col-2">
                <div>
                    <div className="project-main-git-link project-main__row-3__col-1__git">
                    <a target='_blank' className="project-github-link" href="https://github.com/Tapishagrawal/near-steel-1499"><FaGithub/></a> 
                    </div>
                    <div className="project-main-deploy-link project-main__row-3__col-1__link">
                    <a className="project-deployed-link" target='_blank' href="https://6545be83a334a938efc3c62d--fastidious-parfait-63739a.netlify.app/"><FaGlobe/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects

const DIV = styled.div`
    transform: rotate(${({spinVal}) => spinVal}deg);
    transition: all 250ms ease;
`