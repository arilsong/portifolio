import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    height: 600px;
    background: #16161690;
    display: flex;
    align-items: center;
    justify-content: center;

    .about_container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    }

    .about_left{
    width: 50%;
    margin-right: 30px;
    }

    .about_left p {
    color: #F2F2F2;
    margin-top: 20px;
    text-align: justify;
    text-align-last: auto; 
    line-height: 1.4;
    word-spacing: -0.15em;
    }

    .about_right{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    }

    .about_right img {
    width: 25px;
    }

    .about_rectangle{
    max-width: 400px;
    width: 90%;
    height: 80px;
    background: #4F4F4F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px;
    }

    .about_rectangle p {
    color:#F2F2F2;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 2px; 
    margin-bottom: 10px
    }

    .about_rectangle a {
    color: #70FF00;
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

    @media screen and (max-width: 670px){
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
            margin-bottom: 10px;
        }

        .about_rectangle a {
            color: #70FF00;
            font-size: 0.7em;
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


