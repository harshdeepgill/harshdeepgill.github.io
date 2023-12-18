import React from 'react'
import Heading from './Sub_Components/Heading'
import RoundLogo from './Sub_Components/RoundLogo';
import styled from "styled-components";
import {useSelector} from "react-redux";


const techStack = [
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
        name: "React"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png",
        name: "Node js"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
        name: "Mongo DB"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
        name: "Express js"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
        name: "HTML 5"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png",
        name: "CSS 3"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png",
        name: "Java Script"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",
        name: "Type Script"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png",
        name: "Python"
    },
    {
        source: "https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/icon-openai.png?alt=media&token=f03363fa-d268-4f9c-af1c-fc52c4ca54ee",
        name: "Open AI"
    }
]

const styling = [
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
        name: "Tailwind"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sass_icon_130182.png",
        name: "Sass"
    },
    {
        source: "https://www.coffeeclass.io/logos/chakra-ui.png",
        name: "Chakra UI"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_styled_icon_130142.png",
        name: "Styled Components"
    },
    {
        source: "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",
        name: "Material UI"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png",
        name: "Bootstrap"
    },
]

const tools = [
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
        name:"Redux"
    },
    {
        source: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
        name:"Mongoose"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
        name:"Git"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2157/PNG/512/github_git_hub_logo_icon_132878.png",
        name:"Git Hub"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png",
        name:"NPM"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png",
        name:"Firebase"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_cypress_icon_130654.png",
        name:"Cypress Testing"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jest_icon_130514.png",
        name:"Jest Testing"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png",
        name:"Postman"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/1159/PNG/256/linux_81610.png",
        name:"Linux CLI"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/1243/PNG/512/adobephotoshopicon_84144.png",
        name:"Photoshop"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/1243/PNG/512/adobeillustratoricon_84157.png",
        name:"Illustrator"
    },
]

const Skills = () => {

    const scrollFr = useSelector(store => store.scrollFr);


  return (
    <div id="skills" className='skills-main'>
        <Heading text={"My"} colorText={"Skills"}/>

        <div className="skills-main__grid-single">
            <div className="skills-main__grid-single__col">
                {techStack.map((el, index) => <RoundLogo key={index} {...el}/>)}
            </div>
            <p>Tech Stack</p>
        </div>

        <div className="skills-main__grid-doubble">
            <div className="skills-main__grid-doubble__col-1">
                {styling.map((el,index)=> <RoundLogo key={index +Date.now()} {...el}/>)}
                <p>UI Frameworks</p>
            </div>
            <div className="skills-main__grid-doubble__col-2">
                <IMG spinVal={scrollFr*80} className="skills-main__grid-doubble__col-2__img">
                    <img  src="https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/sun%20vector%20(2).png?alt=media&token=b8911eb8-5327-4622-a49e-ef79b0150361&_gl=1*1ik8rkz*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5ODIxMDgzNy40MC4xLjE2OTgyMTEyOTguNDkuMC4w" alt="" />
                </IMG>
            </div>
        </div>

        <div className="skills-main__grid-single">
            <div className="skills-main__grid-single__col">
                {tools.map((el, index) => <RoundLogo key={index} {...el}/>)}
            </div>
            <p>Tech Tools</p>
        </div>

    </div>
  )
}

export default Skills

const IMG = styled.div`
    width: 57%;
    margin: 0 auto;
    transition: all 300ms ease ;
    transform: rotate(${props => props.spinVal}deg);
`