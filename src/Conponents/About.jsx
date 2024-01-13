import React from 'react'
import Heading from './Sub_Components/Heading'
import HorizontalScroll from './Sub_Components/HorizontalScroll'
import GreyLogo from './Sub_Components/GreyLogo'
import styled from 'styled-components';
import { BsDownload } from "react-icons/bs";
import resume from "../Sass/resume.pdf"
import { AiOutlineDownload } from 'react-icons/ai';
import { DownloadIcon } from '@chakra-ui/icons';

const variable = [
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVR4nO2ZQXKDMAxFveqd2lwgF2vaXiudrvw/K05Ak1yDjmbqDbbBTgwYojejlUHWHyEZkDGKojwXbdu+APgieSPZ12wAriQ/JGZPCIDPtQNkvp1CQkRlb609mMppmubNZcZbdCrNRmAsXhWyEtSMbDkjJI8AfkfaXyfXBHxN3Zdr3XCfXCFdyiYBXyn3ZYsxDwgZbcmx9dIdkDmxqRBqRpKhPlr/aLFTu1YQrZHd1wiAH5LfpYQM/S0mRDYleS4lZOgvhtbIHt9+jxNBRb9HCovpHvoeqRmqkMqgZuROUg+96jPCxEPvDr99MF73E1t+EJvKsdYeJFYAF29R5g0zHGJz27snRIYmIsZlpmYDcBERwUFPKaZqbTMHL1XIxgeoGBtsLkXhAao/2FxQiOtwr7MMNpeidFs1a7EbIYpiovwBOiuGGXiUevoAAAAASUVORK5CYII=",
        name: "Responsive Design"
    },
    {
        source: "data:image/png;base64,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",
        name: "Web Design"
    },
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO1YO4hTQRR961/8oCCKCILarBYWCooWCoLarFi6glaKnYWIitqILKs2u7CghVrZiGHTqIWNBGFJQt45k2d4KgT8IWshKH7WDy765C43OjxSuL5AZs0cGJjL3Dtzzpz35mUSBB4eHp2BOI5nAbhE8jXJ5G8bgB8AHhlj9gYuAMDFyQhoJigMw00uCBlVUlsmWTcTwJCKyQftBnVn/6UWwHKS37M4mvFpGCV5QV6PTEJUTL5dQvin9WcW0k4YY7Y2nJnSQgS/+XshjoDeEcdA74hjoHfEMdA74hjYcY4AeAbgU5Ik06rV6gr9kTakY2e0fp/GAxKHYbhT4wqAV9I3xqzT2psab9fay0rorMYbtbZO8qPce1ol5LrmrDXG7Nd+TceGAfwslUrLNO5RsqfjOJ5PclzjNSQPav+wdcUeI1lWQvd0/Hi5XF4oN0+Sd1vmCMlezTlA8oosLuQBLCH5FMDDRu7IyMgCuWipwF1K5osx5lDDrSiKVllzC/mvhUJhju7+GIDbJLfpmsdaJiSKoqVCnOQggBhAH4BvsrMqaCDlYBHAc82rkLwD4AaABwBepEicbLikPM6RfA/ghMbrWyZEk2sknyjxzSTvS6wkelK553VOGe8neVSvpB9IXkuJ3qBzPNa2slEL4E2SJF2tFjKoC77L5XLTSZ7SunF5nu1c6yWW/B0Auq0raa+dKwcIybf2AULdIJK3LMG75VCYuJtnEWK9xPnUThbTufV6fTbJz9Kkr4u9tA+F1NzDymGPxhP/zJA8YpG9qk9DdyYh4kKtVltcLBbn6k52SRxF0bxm+eKS7ZQcAtVqdVGzXJlT5pI1At0IiQuFwgw7p1KprG5W33kfRNdBL8Qx0DviGOgdcQz0jjgGekdcd4RTvAX/jRAPD4/OwC99eecLrxDC2AAAAABJRU5ErkJggg==",
        name: "Backend"
    },
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuklEQVR4nO2YMQ4CMQwE/f9nYV2XeVPQiYoGnDvDGbMjuUgRKaONHSlmQoglxhgbMIuXvxUpcMgZqbCIFQWJdEpkPAaAR9dlRQAHbtH1J0E9Ugz+NhGKlwVEvMJBeV1fGSxCLL7sR+7y02uf0dicfNlTpksZEVvgyJ4IEtlRIjTtEbqIZIBETInMtj1CF5EMkIgpkdm2R+gikgESsYaJkHS/r+wRz/hIu1ykEkjk1xOheFlARL/xQjTkDu062W55gbOEAAAAAElFTkSuQmCC",
        name: "Frontend"
    },
    
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADBElEQVR4nO1ay2oUQRQtQUE3GnWd6Co+P8BoFiJu/ACN/oAa4h9EtyoiqDt1IS59RJCJC8HExow2M93ndDWzEVxJFj7IIAluEsWMXFKNbaNO96S7p5E6UNDTfavuvfU6t26NUusEyX1BEJwBcInkfZKvAbwjOQ/gC8nvUszzvPlWF1mpY+ruVWWj2WzuBDAO4DHJTyQ7ORVp6xHJ86KjMAeCIDgB4AmAlbgBAD4DeEryGsmzAI5JD5Pc1Wq1tgPYJEWe5Z18ExmRlTpSV9pItLkiukRnbg6QHJHpElPyA8AL6bkgCPbnoaPT6WyQtrA20jOiI+aY6B7puXHXdbeQvAtg1TTYJnnR87xBVTA8zxs0a65tOk9suOU4zsZMDTUaja3RKABYJnkZwDZVMrTWAySvxKbzc7Et9TCTfBbNf9/3j6g+A8BobB1Ni41dK5E8bZz4GobhsKoIwjAcFpuMbae6ViDpGOFxVTEAmDCjMttVmOSSCMv8VBVDa20LF0cWuwpH214VHXFdd0dkX1fhGF9MqIqB5IVeHKnsYmcWR0xZ8H3/qOozgiA4nIzrsozITBT3CCn1Y81orQcAXI0I0YRG2RyRcIDkzVgvtCVsADBUtAMAhuIhiik3jE3ZHIl+C7MDeBMPGmUfl81Aa30gFct2gbThed5BwxMvk0GjTK2/2ZfakUQYP2Vir9/WEYAayesmIj4ukazWencyjJd34rzIiKzUMXUXEmH8suj6Uxi/bkcSe/k5kg9JfszxYPUBwAM5p4iOXu3LLmjged4eE59NArhHco7kWwDvzfH2mxR5lnfm2ysjO0lyLMs2z6yOWGYvELTMTsvsuUBbZleW2WuW2WmZ/d+wzF4CaJmdltlzgbbMriyz1yyzszhmX8py1C3zzO7+SmIvZrkfqXISezaN8FjVk9gATqa9Q5yO3aGPqgrdIQKopc5umlvdetWS2CTnUt/qJu7Z78Tv2fuVxAawCuC24zibc/3nQ8lJ7DqAQyovVCWJnRv6ncQuDGUnsdX/jp/tuLMYlJHl6gAAAABJRU5ErkJggg==",
        name: "Data Base"
    },
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACG0lEQVR4nO2Yv4vUQBiGR0QFbdRCO7E9sLTRRv+As9VewVJL0f5OLbe/ykq31e6K6xJv932SsCwebnGdcnCFlYL4IzL6BQ5xL2E3iZkjL0wRJvN+8+w3+WZmnevVqxlNp9OTkp4DH4E8pCbpA/DUMzhJz/73hGpo686o/MM1F5iSJLleZMYVVC5QUcy/B+lqRgi8uSMH4gIVPUjHRJ+RJTQcDo9LGknKXMgZkbRqR4rdoEGANwbyOFgQSZeA75K+xnF8MVgQYN2y8bJm37w1EH/xAfZ8nCRJbnQKBLgF7Eh6//uGdvi7dywb7/I8P3awzz8D28DEe7YGMhqNrkjaPHDOwZfVkmBbBvJgTv/bwk/Spo/RGEgUReeBAfDNAn4CHs1ms1MlgVYk/QS+TCaTc/96R9IJ4D6wb94/JL2oUhQqg8wLkmXZhbIgFmhg4zaa+LGoCrJM2iWdtsn48VeXWL5xHSDxoiBJktyzceOqYxoDWWb9egDzv+sqKGpyaS0axC+l4r0sy86UAC/8HVJj+d2eM7kN6x+UefoTcWvl95ANMfq7L03Ts8BnK7srFbx8QdlpdUOsIkkPzXfLNSwaBpnaMrntQgUZj8c3zXOv7AzWaRDglXmu1eXZOojfW/zFyZfPNE0vu1BBJD0xv9euJdEQyK595KsuZBD+nMvisvtJnaL/g65jos9Ix0Sfka5nhMCbOzIgvXq5RvQL+BxG7onAhtcAAAAASUVORK5CYII=",
        name: "Software Development"
    },
    {
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO2VQQrCMBBFZ60H6hUUryd6H93+X3qG1pXSM1QKFYSqpTHGJP0PZpPQdF5mhpgJIUSSVFW1BnAk2ZLsIo+W5AHAaiTSb0SQYDcz9q9Ebv0mgMIiB0Ax5HodbT4sLRH4Ll8fIr9uJXMRAbADcAHQlGW5nVqPWaR5OqSeWv94+JdQImbWt81w+zXJzdR6tK3lQjYiIeFiRJhYWPYilgiUSMoVYcD3wPU7W6SIecL1H5RIrhVhgBmRSCwve5CKhECtxSUPu3lCIlRFws+It9liziIxQ4mkVhEmFvZC5PzvpDg/ToEaQAghzC93b9gFfii4lfEAAAAASUVORK5CYII=",
        name: "UI/UX"
    },
    {
        source: "data:image/png;base64,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",
        name: "BEM Architecture"
    },
    
]


const About = () => {

    const hanldeResume = () => {
        const redirectLink = "https://drive.google.com/file/d/1SflmHSR33j-j1wXeW51C5vJVMWDJZtr2/view?usp=sharing";
        window.open(redirectLink, "_blank");
    }
  return (
    <div id="about" className='about section about-main'>
        <Heading text={"About"} colorText={"me"}/>
        <p id="user-detail-intro">
        A dedicated fullstack web developer, I bring passion, lifelong learning, and proficiency in the MERN stack to the table. My focus is on crafting robust, functional, and user-centric websites having attention to detail and a problem solving mindset with hands on experience on Git for version control. Quality and solution driven, skilled in and having hands-on experience of working with HTML, CSS, JavaScript, React, NodeJS and MongoDB. Highly resilient and focused on learning new techniques to build real world websites while facilitating the growth of self and that of the organization.
        </p>

        <div className='about-main__stats'>

            <div className="about-main__stats__data">
                <p className="about-main__stats__data__number">1500+</p>
                <p className="about-main__stats__data__heading">Hours Coding</p>
            </div>

            <div className="about-main__stats__data">
                <p className="about-main__stats__data__number">10+</p>
                <p className="about-main__stats__data__heading">Projects</p>
            </div>

            <div className="about-main__stats__data">
                <p className="about-main__stats__data__number">1000+</p>
                <p className="about-main__stats__data__heading">DSA Problems</p>
            </div>
        </div>

        <HorizontalScroll>
            {variable.map((el, index) => <GreyLogo key={index} {...el}/> )}
        </HorizontalScroll>

        <div>
        <BUTTON id="resume-button-2" onClick={hanldeResume}><a style={{display:"flex", alignItems: "center", textDecoration:"none", gap:"1rem", color: "rgb(22,22,22)"}} href={resume} download="Harshdeep-Gill-Resume" rel='noopener noreferrer'  id="resume-link-2"><p>Resume</p><DownloadIcon/></a></BUTTON>
        </div>
        <div className="about-main__secondary-heading">
            <p>Education</p>
        </div>

        <div className="about-main__edu-table">
            <div className="about-main__edu-table__header">
                <p>Course</p>
                <p>Organization</p>
                <p>Duration</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Full Stack Web Development</p>
                <p>Masai School</p>
                <p>apr-23 to jan-24</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Bachelor's in Engineeing</p>
                <p>Chitkara University</p>
                <p>2014-2018</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Higher Secondary</p>
                <p>D.A.V Public School</p>
                <p>2011-2013</p>
            </div>
        </div>
        
        <div className="about-main__secondary-heading">
            <p>Experience</p>
        </div>
        <div className="about-main__edu-table">
            <div className="about-main__edu-table__header">
                <p>Organization</p>
                <p>Role</p>
                <p>Duration</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Chegg India pvt ltd</p>
                <p>Subject matter Expert (Part-time)</p>
                <p>OCt-2019 to apr-2022</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Course Hero</p>
                <p>Subject expert (part-time)</p>
                <p>jan-2020 to apr-2022</p>
            </div>

            <div className="about-main__edu-table__data">
                <p>Sanyo Eco India</p>
                <p>Intern</p>
                <p>2018</p>
            </div>
        </div>

    </div>
  )
}

export default About

const BUTTON = styled.button`
margin: 0 auto;
margin-bottom: 5rem;
text-align: center;
    display: flex;
  gap: 1rem;
  align-items: center;
  padding: 2rem 2.5rem 2rem 2.5rem;
  font-size: 1.6rem;
  border-radius: 10px;
  background-color: white;
  color: rgb(22,22,22);
  border: none;
  outline: none;
  font-family: inherit;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 0 10px rgb(220,252,55), 0 0 40px rgb(220,252,55), 0 0 10px rgb(220,252,55);
    background-color: rgb(220,252,55);
    color: white;
    transform: translateY(-3px);
    cursor: pointer;
  }
`