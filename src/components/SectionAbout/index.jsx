import React from 'react'
import { Section } from './style'
import iconKey1 from '../../assets/images/chave.png'
import iconKey2 from '../../assets/images/{}.png'

const About = () => {
  return (
    <Section id='about'>
         <div className="about_container">
                <div className="about_left">
                <h2 className="title">
                    aboutme <span className="parentheses">( )</span>
                </h2>
                <p>
                    Olá! Sou um programador full stack autodidata com uma paixão pelo
                    desenvolvimento web e mobile. Adquiri uma ampla gama de habilidades que
                    incluem HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React,
                    React Native, Git e Linux, tudo por meio de um aprendizado autônomo e
                    dedicado. <br /> <br />
                    Minha abordagem autodidata me proporcionou uma perspectiva única e uma
                    capacidade sólida de resolução de problemas. Acredito que minha
                    experiência autodidata demonstra minha habilidade em enfrentar desafios
                    complexos e encontrar soluções criativas. Sou um comunicador eficiente e
                    capaz de trabalhar tanto de forma independente quanto em equipe. Se você
                    está procurando um programador full stack autodidata, versátil e
                    altamente motivado, estou pronto para ajudar a transformar suas ideias
                    em realidade. Entre em contato comigo para discutirmos seus projetos e
                    como posso contribuir para o seu sucesso.
                </p>
                </div>
                <div className="about_right">
                <div className="about_rectangle">
                    <div>
                        <p>Fullstack Developer</p>
                        <a href="#projects">Projects</a>
                    </div>
                    <img src={iconKey1} alt="" />
                </div>
                <div className="about_rectangle">
                    <div>
                        <p>Freelancer</p>
                        <a
                            href="https://www.linkedin.com/in/arilson-gomes-224904253/"
                            target="_blank"
                        >
                            Contrate-me!
                        </a>
                    </div>
                    <img src={iconKey2} alt="" />
                </div>
                </div>
            </div>
    </Section>
  )
}

export default About
