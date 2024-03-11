import React from 'react'
import { Main } from './style'
import Header from '../../components/Header'
import avatar from '../../assets/images/avatar.png'
import iconReact from '../../assets/images/react.png'
import iconNode from '../../assets/images/nodejs.png'
import iconTypeScript from '../../assets/images/iconTypesScript.png'
import Projects from '../../components/SectionProjects'
import Skills from '../../components/SectionSkills'
import About from '../../components/SectionAbout'
import Footer from '../../components/Footer'
const name = '< Arilson Gomes />'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main>
        <section id="showcase">
            <div class="showcase-container">
                <div class="presentation">
                    <p>Olá, eu sou</p>
                    <div id="name" className="stack" style={{ '--stacks': 3 }}>
                        <span style={{ '--index': 0 }}>{name}</span>
                        <span style={{ '--index': 1 }}>{name}</span>
                        <span style={{ '--index': 2 }}>{name}</span>
                    </div>
                </div>
            
                <div className="picture_container">
                    <div className="picture">
                        <img src={avatar} alt="" id="avatar" />
                        <div className="circle_react">
                            <img src={iconReact} alt="" />
                        </div>
                        <div className="circle_node">
                            <img src={iconNode} alt="" />
                        </div>
                        <div className="circle_typescript">
                            <img src={iconTypeScript} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Skills/>
        <Projects />
        </Main>
        <Footer/>
    </div>
    
  )
}

export default Home
