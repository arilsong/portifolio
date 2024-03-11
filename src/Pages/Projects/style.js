import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    margin-top: 60px;
    background-color: #1B1B1B;

    .title{
        color: #fff;
    }

    nav{
        position: fixed;
        width: 100%;
        z-index: 10;
        height: 60px;
        background: #1b1b1b;
        top: 0;
        left: 0;
        color: white;
    }

    nav ul {
        width: 100%;
        height: 100%;
        max-width: 1000px;
        margin: auto;
    }

    nav ul li {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
`