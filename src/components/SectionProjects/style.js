import styled from "styled-components";
import project1 from '../../assets/images/projeto_1.png'
import project2 from '../../assets/images/projeto_2.png'
import iconApi from '../../assets/images/iconApi.png'

export const Section = styled.section`

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .projects_container{
    width: 100%;
    height: 100%;
    padding: 30px;
    background: #161616bc;
    }
    
    .project{
      background-color: #2C2C2C;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }

    .project_about{
      width: 100%;
      height: 100%;
      padding: 20px 20px;

    }

    .project_about h2 {
        font-size: 1.2rem;
        color: #fff;
        margin-bottom: 25px;
    }

    .project_about p {
        font-size: 1rem;
        color: #fff;
        margin-top: 20px;
        text-align: justify;
        width: 100%;
    }

    .project-buttons{
        width: 100%;
    }

    .project-buttons button{
        display: block;
        margin: 20px auto;
        width: 110px;
        height: 30px;
        border: 1px solid #70FF00;
        color: #70FF00;
        background: transparent;
    }

    .project-buttons a {
        color: #70FF00;
    }

    .project_stack{
        display: flex;
        align-items: center;
        font-weight: bold;
    }

    .project_stack span{
      margin-left: 5px;
    }

    .project_stack img{
      width: 30px;
    }

    .project_image_container{
        display: none;
        width: 30%;
        height: 200px;
    }

    .project_image_container div{
      display: none;
      width: 80%;
      height: 60%;
      border-radius: 10px;
      overflow: hidden;
      border: 2px solid  #70FF00;
    } 

    #project1{
      background: url(${project1}) no-repeat center center;
      background-size: cover;
    }

    #project2{
      background: url(${project2}) no-repeat center center;
      background-size: cover;
    }
    #project3{
      background: url(${iconApi}) no-repeat center center;
      background-size: cover;
      background-color: #121C24;
    }


    .project-view-more button {
      display: block;
      margin: auto;
      width: 160px;
      height: 35px;
      margin-top: 40px;
      border: 1px solid #70FF00;
      color: #70FF00;
      background: transparent;
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
    }

    .project-view-more button:hover{
      color: #fff;
    }

    @media screen and (min-width: 600px){
        .project{
            flex-direction: row;
        }

        .project_image_container{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .project_image_container div{
            display: flex;
        }

        .project_about{
         width: 70%;
        }

        .project-buttons button{
          width: 150px;
        }
    }

    @media screen and (min-width: 860px){
        .project_image_container {
            height: 250px;
        }
    }

`