import React from 'react'
import { Nav } from './style'
import iconGitHub from "../../assets/images/github_logo.png"
import iconLinkedin from "../../assets/images/linkedin_logo.png"

const Header = () => {
  return (
    <Nav>
        <div className="nav_container">
            <div className="logo">
                <a style={{ textDecoration: "none" }} href="#showcase">
                    <span translate="no" id="logo_a">
                    A
                    </span>
                    <span translate="no" id="logo_g">
                    G
                    </span>
                </a>
            </div>
            <div className="menu">
                <a href="#about">About</a>
                <a href="#skilss">Skills</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="links">
                <a href="https://github.com/Arilson21">
                    <img src={iconGitHub} alt="" className="links_img" />
                    <p translate="no">Github</p>
                </a>
                <a
                    href="https://www.linkedin.com/in/arilson-gomes-224904253/"
                    target="_blank"
                >
                    <img
                    src={iconLinkedin}
                    alt=""
                    className="links_img"
                    />
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    </Nav>
  )
}

export default Header
