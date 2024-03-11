import React from 'react'
import { Section } from './style'
import iconReact from '../../assets/images/react.png'
import iconNode from '../../assets/images/nodejs.png'
import iconTypeScript from '../../assets/images/iconTypesScript.png'
import iconHtml from '../../assets/images/html5-logo.png'
import iconCss from '../../assets/images/css-3-logo.png'
import iconJs from '../../assets/images/Javascript_Logo.png'
import iconGit from '../../assets/images/Git-Icon-1788C.png'
import iconLinux from '../../assets/images/liniux_logo.png'

const Skills = () => {
  return (
    <Section id='skilss'>
        <div className="skills_container">
                <h2 className="title">
                skills <span className="parentheses">( )</span>
                </h2>
                <div>
                <img src={iconHtml} alt="" className="skills_img" />
                <img src={iconCss} alt="" className="skills_img" />
                <img
                    src={iconJs}
                    alt=""
                    className="skills_img"
                />
                <img
                    src={iconTypeScript}
                    alt=""
                    className="skills_img"
                />
                <img src={iconNode} alt="" className="skills_img" />
                <img src={iconReact} alt="" className="skills_img" />
                <img
                    src={iconGit}
                    alt=""
                    className="skills_img"
                />
                <img src={iconLinux} alt="" className="skills_img" />
                </div>
            </div>
    </Section>
  )
}

export default Skills
