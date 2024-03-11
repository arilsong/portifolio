import React, { useEffect } from 'react'
import { Section } from './style'
import project1 from '../../assets/images/projeto_1.png';
import project2 from '../../assets/images/projeto_2.png';
import project3 from '../../assets/images/projeto_3.png';
import iconHtml from '../../assets/images/html5-logo.png';
import iconCss from '../../assets/images/css-3-logo.png';
import iconJs from '../../assets/images/iconJS.png';
import iconNode from '../../assets/images/iconNode2.png';
import iconMongodb from '../../assets/images/iconMongodb.png';
import iconDocker from '../../assets/images/iconDocker.png';
import { Link, useLocation } from 'react-router-dom';

const Projects = () => {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
  return (
    <Section id='projects'>
      <div className="projects_container">
        <h2 className="title">
        projects <span className="parentheses">( )</span>
        </h2>
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
        <div className='project-view-more'>
          <Link to={"/projects"}>
            <button>
              Ver mais
            </button>
          </Link>
        </div>
      </div>
      <ScrollToTop />
      </Section>
  )
}

export default Projects
