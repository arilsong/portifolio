import styled from "styled-components";


export const Main = styled.div`
    margin: auto;
    max-width: 1000px;
    .parentheses{
    color: #F2F2F2;
    }

    .title {
    color: #70FF00;
    }


    .showcase-container{
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;  
    }

    .presentation{
    width: 50%;
    }

    .presentation p {
    color: #E0E0E0;
    font-size: 2em;
    font-weight: 400;
    }

    #name{
    color: #70FF00;
    font-weight: 900;
    width: 180px;
    font-size: 2.5em;
    }

    .stack {
    display: grid;
    grid-template-columns: 1fr;
    }

    .stack span {
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 1s cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 3s ease infinite 2s alternate-reverse;
    }

    .stack span:nth-child(odd) { --glitch-translate: 8px; }
    .stack span:nth-child(even) { --glitch-translate: -8px; }

    @keyframes stack {
    0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    };
    60% {
    opacity: 0.5;
    transform: translateX(50%);
    }
    80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    100% {
    text-shadow: none;
    }
    }

    @keyframes glitch {
    0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
    }
    2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%, 100% {  text-shadow: none; transform: none; }
    }

    .picture{
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2D2D2D;
    border-radius: 50%;
    position: relative;
    margin-right: 50px;
    }

    #avatar {
    height:100%;
    border-radius:50%;
    }

    .circle_react{
    background: #333333;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 220px;
    top: 200px;
    }

    .circle_react img {
    width: 70px;
    animation: animeReact 15s linear infinite;
    }

    @keyframes animeReact {
    0%{
    transform: rotate(0deg);
    }
    100%{
    transform: rotate(360deg);
    }
    }

    .circle_node{
    background: #333333;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 4px;
    top: 40px;
    }

    .circle_node img {
    width: 60px;
    }

    .circle_typescript{
    background: #333333;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 4px;
    top: 220px;
    }

    .circle_typescript img {
    width: 40px;
    }




    @media screen and (max-width: 950px){
        .presentation p {
        font-size: 1.5em;
        }

        #name{
        font-size: 2.5em;
        }

    }

    @media screen and (max-width: 810px){
        .about_rectangle p {
        font-size: 0.8em;
        }

        .about_right img {
        width: 20px;
        }


        .about_rectangle a {
        font-size: 0.8em;
        }

    }

    @media screen and (max-width: 700px){

        .picture{
        width: 250px;
        height: 250px;
        }

        #avatar {
        width: 250px;
        }

        .circle_react{
        width: 70px;
        height: 70px;
        right: 180px;
        top: 170px;
        }

        .circle_react img {
        width: 50px;
        }

        .circle_node{
        width: 50px;
        height: 50px;
        }

        .circle_node img {
        width: 40px;
        }

        .circle_typescript{
        width: 50px;
        height: 50px;
        right: 4px;
        top: 180px;
        }

        .circle_typescript img {
        width: 25px;
        }


        /* temporario */
        .project {
        width: 150px;
        height: 130px;
        }

    }

    @media screen and (max-width: 670px){
    .presentation p {
    font-size: 1.2em;
    }

    #name{
    font-size: 2em;
    }

    .about_container{
    flex-direction: column;
    height: 500px;
    }

    .about_right{
    flex-direction: row;
    width: 100%;
    }

    .about_rectangle{
    margin: 30px;

    }

    .about_left{
    width: 90%;
    margin-left: 30px;
    }

    }


    //*********************+ */

    @media screen and (max-width: 500px){


.parentheses{
  color: #F2F2F2;
}

.title {
  color: #70FF00;
}


.main{
margin-top: 100px;
}

.showcase-container{
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  padding-bottom: 100px;
  margin-top: 100px;
}

.presentation{
  width: 100%;
}

.presentation p {
  color: #E0E0E0;
  font-size: 1em;
  font-weight: 400;
}

#name{
  color: #70FF00;
  font-weight: 900;
  width: 180px;
  font-size: 1.6em;
}

.picture_container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.picture{
   width: 200px;
  height: 200px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2D2D2D;
  border-radius: 50%;
  position: relative;
}

#avatar {
  width: 200px;
}

.circle_react{
  background: #333333;
  width: 50px;
  height: 50px;
  right: 140px;
  top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  
}

.circle_react img {
  width: 35px;
}

.circle_node{
  background: #333333;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 4px;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
}

.circle_node img {
  width: 30px;
}

.circle_typescript{
  background: #333333;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 20px;
  top: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.circle_typescript img {
  width: 18px;
}

#about{
width: 100%;
height: 740px;
background: #16161690;
display: flex;
align-items: center;
justify-content: center;
}

.about_container{
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

}

.about_left{
  width: 80%;
  margin-right: 30px;
}

.about_left p {
  color: #F2F2F2;
  margin-top: 20px;
  text-align: justify;
  font-size: 0.9em;
}

.about_right{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}

.about_right img {
  width: 20px;
}

.about_rectangle{
  max-width: 280px;
  width: 90%;
  height: 80px;
  background: #4F4F4F;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 10px;
  margin: 10px 0;

}

.about_rectangle p {
  color:#F2F2F2;
  font-family: 'Roboto Slab', serif;
  font-size: 0.7em;
  letter-spacing: 2px; 
  margin-bottom: 10px
}

.about_rectangle a {
  color: #70FF00;
  font-size: 0.7em;
}

#skilss{
  width: 100%;
  height: 350px;
}

.skills_container{
  width: 100%;
  height: 100%;
  padding: 30px;
}

.skills_container div{
  /* display: flex;
  padding-top: 70px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  padding-top: 70px;
}

.skills_img {
  width: 50px;
  margin: auto;
}

}


@media screen and (max-width: 351px){
.about_left{
  font-size: 0.85em;
}

#about{
  height: 550px;
}
}



@media screen and (max-width: 340px){

.about_left p {
  font-size: 0.7em;
}
}


`

