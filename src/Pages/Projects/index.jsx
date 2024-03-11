import React from 'react'
import Header from '../../components/Header'
import SectionProjects from '../../components/SectionProjects'
import { Container } from './style'
import { Section } from '../../components/SectionProjects/style'
import iconHtml from '../../assets/images/html5-logo.png';
import iconCss from '../../assets/images/css-3-logo.png';
import iconJs from '../../assets/images/iconJS.png';
import iconNode from '../../assets/images/iconNode2.png';
import iconMongodb from '../../assets/images/iconMongodb.png';
import iconDocker from '../../assets/images/iconDocker.png';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'


const Projects = () => {
  return (
    <div>
      <Container>
          <nav>
             <ul>
                  <li>
                      <Link to={"/"}><svg fill="#70FF00" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">{" "}<g>{" "}<g>{" "}<g>{" "}<polygon points="298.667,324.177 298.667,187.814 189.589,255.996 " />{" "}<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M341.333,362.667 c0,7.765-4.203,14.891-11.008,18.667c-3.2,1.771-6.763,2.667-10.325,2.667c-3.947,0-7.851-1.088-11.307-3.243L138.027,274.091 C131.797,270.187,128,263.36,128,256s3.797-14.187,10.027-18.091l170.667-106.667c6.592-4.117,14.891-4.352,21.632-0.576 c6.805,3.776,11.008,10.901,11.008,18.667V362.667z" />{" "}</g>{" "}</g>{" "}</g>{" "}</g></svg></Link>
                  </li>
              </ul>
          </nav>
          <Section>
          <div className="project">
            <div className="project_image_container">
              <div id='project1'>
              </div>
            </div>
            <div className="project_about">
              <h2>01 Landing page</h2>
              <p className='project_p'>O Meu Primeiro Site é um projeto simples criado com HTML e CSS. Ele serve como uma introdução ao desenvolvimento web e demonstra as habilidades básicas de estruturação e estilização de páginas.</p>
              <p className="project_stack">Skills:
                <span>
                <img src={iconHtml} alt="" />
                </span>
                <span>
                <img src={iconCss} alt="" />
                </span>
              </p>
              <div className="project-buttons flex">
                <button><a href="https://github.com/Arilson21/first_landing_page" target='_blank' className='flex'>View code</a></button>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_image_container">
              <div id='project2'>
              </div>
            </div>
            <div className="project_about">
              <h2>02 Agenda</h2>
              <p className='project_p'>Um aplicativo de agenda de contatos online construído usando Node.js e integração com diversos frameworks e tecnologias, como Express.js, Webpack, Bcrypt e Mongoose. O servidor de banco de dados utilizado é o MongoDB.</p>
              <p className="project_stack">Skills:
                <span>
                <img src={iconHtml} alt="" />
                </span>
                <span>
                <img src={iconCss} alt="" />
                </span>
                <span>
                <img src={iconJs} alt="" />
                </span>
                <span>
                <img src={iconNode} alt="" />
                </span>
                <span>
                <img src={iconMongodb} alt="" />
                </span>
              </p>
              <div className="project-buttons flex">
                <button><a href="https://github.com/Arilson21/Agenda-online" target='_blank' className='flex'>View code</a></button>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_image_container">
              <div id='project3'>
              </div>
            </div>
            <div className="project_about">
              <h2>02 API de Autenticação</h2>
              <p className='project_p'>A API de Autenticação é projetada para lidar com funcionalidades de registro de usuários, autenticação e redefinição de senha via email usando nodemailer. Ela utiliza um banco de dados MongoDB para armazenar informações de usuário e o Docker para facilitar o deploy.</p>
              <p className="project_stack">Skills:
                <span>
                <img src={iconJs} alt="" />
                </span>
                <span>
                <img src={iconNode} alt="" />
                </span>
                <span>
                <img src={iconMongodb} alt="" />
                </span>
                <span>
                <img src={iconDocker} alt="" />
                </span>
              </p>
              <div className="project-buttons flex">
                <button><a href="https://github.com/Arilson21/authentication_api" target='_blank' className='flex'>View code</a></button>
              </div>
            </div>
          </div>
          </Section>
      </Container>
      <Footer/>
    </div>
  )
}

export default Projects
