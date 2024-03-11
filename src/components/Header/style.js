import styled from "styled-components";


export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 60px;
    background: #050505;
    top: 0;
    left: 0;

    .nav_container{
        max-width: 1100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: auto;
    }

    .parentheses{
        color: #F2F2F2;
    }

    .title {
        color: #70FF00;
    }


    .logo{
        font-size: 2em;
        font-weight: 900;
        letter-spacing: -4px;
    }

    #l_a {
        text-decoration: none;
    }

    #logo_a{
        color: #727272;
        text-decoration: none;
    }

    #logo_g{
        color: #F2F2F2;
        text-decoration: none;
    }


    .menu a{
        color: white;
        text-decoration: none;
        padding: 20px;
        font-weight: 500;
    }

    .links {
        display: flex;
    }

    .links a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        padding: 20px;
        font-weight: 500;
    }

    .links_img {
        width: 20px;
        margin: 8px;
        display: block;
    }

    @media screen and (max-width: 615px){
   .links p{
       display: none;
   }

   .menu a {
       font-size: 0.8em;
   }

   .logo span {
        font-size: 0.8em;
    }
    }

    ///+++++++++++++++++++++++++++++
    @media screen and (max-width: 450px){
        .nav_container{
        max-width: 1100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: auto;
        }

        .logo{
        font-size: 1.5em;
        font-weight: 900;
        letter-spacing: -4px;
        }

        #logo_a{
        color: #828282;
        text-decoration: none;
        }

        #logo_g{
        color: #F2F2F2;
        text-decoration: none;
        }

        /* .menu {

        } */

        .menu a{
        color: white;
        text-decoration: none;
        padding: 10px;
        font-weight: 500;
        font-size: 0.7em;
        }

        .links {
        display: flex;
        }

        .links a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        padding: 20px;
        font-weight: 500;
        text-decoration: none;
        }

        .links p {
        display: none;
        }

        .links_img {
        width: 17px;
        display: block;
        margin: 0;
        padding: 0;
        }
    }

`