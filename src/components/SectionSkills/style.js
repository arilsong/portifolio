import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    height: 400px;

    .skills_container{
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: #252525;
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
    width: 70px;
    margin: auto;
    }

    @media screen and (max-width: 500px){
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

`