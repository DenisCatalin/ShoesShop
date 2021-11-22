import styled, {keyframes, css} from "styled-components";

import bgImage from '../../assets/bgImage.png';

const animateCircle = keyframes`
    from { transform: translateX(100%); }
`;

const animateText = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

const animateParticle = keyframes`
    0% { opacity: 0; }
    40% { opacity: .2; }
    60% { opacity: 1; }
`;

const animateButtonAdd = keyframes`
    0% { transform: translateX(-100%); }
    85% { transform: translateX(-2%); }
    89% { transform: translateX(0%); }
    93% { transform: translateX(-2%); }
    97% { transform: translateX(0%); }
    100% { transform: translateX(0%); }
`;

const animateButtonFav = keyframes`
    0% { transform: translateX(100%); }
    85% { transform: translateX(0%); }
    89% { transform: translateX(-2%); }
    93% { transform: translateX(0%); }
    97% { transform: translateX(-2%); }
    100% { transform: translateX(0%); }
`;

const animateTextSection = keyframes`
    0% { transform: translateY(-10%) translateX(-100%); }
    100% { transform: translateY(-10%) translateX(0%); }
`;

const animateSizeContainer = keyframes`
    0% { transform: translateY(100%); }
    100% { transform: translateY(0%); }
`;

const ButtonHover = css`
    &:hover {
        opacity: .32;
    }
`;

export const ProductBackground = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

export const ProductContent = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;

    @media screen and (max-width: 830px) {
        flex-direction: column;
    }
`;

export const LeftSideContent = styled.div`
    width: 40%;
    height: 90vh;

    @media screen and (max-width:1300px) {
        transform: translateY(-10%);
    }

    @media screen and (max-width:1100px) {
        transform: translateY(-10%);
    }

    @media screen and (max-width: 850px) and (max-height: 450px) {
        width: 100%;
        height: 45vh;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 100%;
        height: 50vh;
    }
`;

export const RightSideContent = styled.div`
    width: 60%;
    height: 90vh;
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    position: relative;

    @media screen and (max-width: 850px) and (max-height: 450px) {
        width: 100%;
        height: 50vh;
        justify-content: center; 
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 100%;
        height: 50vh;
        justify-content: center; 
    }
`;

export const ProductContentText = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-end;
    transform:translateY(-10%);
    align-items: flex-start;
    flex-direction: column;
    padding: 0 6rem;
    margin-left: 5em;
    animation: ${animateTextSection} 1.4s ease;

    @media screen and (max-width: 1300px) {
        margin-left: 0;
    }

    @media screen and (max-width: 850px) and (max-height: 450px) {

    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        justify-content: center; 
        align-items: center;
        transform: translateY(10%);
    }
`;

export const ProductFirstText = styled.h2`
    color: rgba(255, 255, 255, .8);
    margin-bottom: 15px;
    font-size: 2em;

    @media screen and (max-width: 1300px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1em;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        font-size: .8em;
        margin-bottom: 0;
    }
`;

export const ProductSecondText = styled.h1`
    color: rgba(255, 255, 255, .9);
    margin-bottom: 20px;
    font-style: italic;
    font-size: 6em;
    font-weight: bold;
    text-shadow: 5px 5px 5px black;

    @media screen and (max-width: 1300px) {
        font-size: 5em;
    }

    @media screen and (max-width: 1024px) {
        font-size: 4em;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        font-size: 2.5em;
        margin-bottom: 5px;
    }
`;

export const ProductDescription = styled.p`
    color: rgba(255, 255, 255, .6);
    font-size: 1.1em;
    font-weight: 600;

    @media screen and (max-width: 1300px) {
        font-size: 1em;
    }

    @media screen and (max-width: 1024px) {
        font-size: .7em;
    }
    @media screen and (max-width:850px) {
        text-align: center;
    }
`;

export const ProductSizeContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-left: 10em;
    animation: ${animateSizeContainer} 1.4s ease;

    @media screen and (max-width: 1300px) {
        margin-left: 5em;
    }

    @media screen and (max-width:850px) {
        margin-left: .5em;
    }
`;

export const ProductSizeTitle = styled.h2`
    color: white;
    font-style: italic;

    @media screen and (max-width: 450px) {
        font-size: 1.25em;
    }
`;

export const ProductSizeGrid = styled.div`
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
`;

export const ProductSizeItem = styled.button`
    color: #BBBBBB;
    background: #967742;
    width: 80%;
    height: 60%;
    gap: 10ch;
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 1.8em;
    transition: 1s;
    cursor: pointer;
    z-index: 2;
    ${ButtonHover}

    @media screen and (max-width: 1300px) {
        font-size: 1.4em;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.2em;
    }
`;

export const ProductCircle = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: rgba(150, 119, 66, .5);
    margin-right: 10em;
    position: relative;
    animation: ${animateCircle} 2s ease;

    @media screen and (max-width: 1300px) {
        width: 400px;
        height: 400px;
        transform: translate(25%, -15%);
    }

    @media screen and (max-width: 1024px) {
        width: 370px;
        height: 370px;
        transform: translate(30%, -15%);
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 300px;
        height: 250px;
        transform: translate(33%, -5%);
    }
`;

export const ProductButtons = styled.div`
    position: absolute;
    width: 45%;
    height: 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 83%;
    left: 58%;
    transition: 1s;

    @media screen and (max-width: 1300px) {
        left: 28%;
    }
`;

export const ProductButtonAdd = styled.button`
    width: 40%;
    height: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 1.7em;
    letter-spacing: 1px;
    font-style: italic;
    color: white;
    background: rgba(150, 119, 66, .5);
    cursor: pointer;
    animation: ${animateButtonAdd} 2s ease;
    transition: 1s;
    z-index: 3;
    ${ButtonHover}

    @media screen and (max-width: 1300px) {
        font-size: 1.2em;
        width: 60%;
        transform: translate(90%, -50%);
    }

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        width: 100%;
        height: 70%;
        font-size: 1.9em;
        transform: translate(10%, -85%);
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 100%;
        height: 100%;
        font-size: 1.5em;
        transform: translate(0%, 0%);
    }
`;

export const ProductButtonFav = styled.button`
    width: 40%;
    height: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 1.5em;
    letter-spacing: 1px;
    font-style: italic;
    color: white;
    background: transparent;
    border: 3px solid rgba(150, 119, 66, .5);
    cursor: pointer;
    animation: ${animateButtonFav} 2s ease;
    transition: 1s;
    z-index: 3;
    ${ButtonHover}

    @media screen and (max-width: 1300px) {
        font-size: 1.2em;
    }
`;

export const ProductOpacity = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s;
`;


export const Product = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('');
    background-repeat: no-repeat;
    transform: rotateZ(-15deg);
    position: absolute;
    top: 12%;
    left: 40%;
    z-index: 2;
    transition: 1s;
    animation: ${animateCircle} 2s ease;

    @media screen and (max-width: 1750px) {
        left: 40%;
    }

    @media screen and (max-width: 1300px) {
        left: 22%;
    }

    @media screen and (max-width: 1024px) {
        left: 18%;
        top: 0%;
        width: 90%;
        height: 90%;
    }
`;

export const ProductTitle = styled.h2`
    position: absolute;
    color: white;
    top: 10%;
    left: 50%;
    animation: ${animateText} 1s ease;
    transition: 1s;

    @media screen and (max-width: 1300px) {
        width: 100%;
        top: 5%;
        left: 40%;
        font-size: 1.25em;
    }

    @media screen and (max-width: 1300px) {
        width: 100%;
        top: 0%;
        left: 32%;
        font-size: 1.25em;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 60%;
        font-size: 1em;
        top: -5%;
        left: 20%;
        text-align:center;
    }
`;

export const ProductPrice = styled.h2`
    position: absolute;
    color: white;
    top: 35%;
    font-size: 2em;
    z-index: 1;
    left: 51%;
    font-weight: bold;
    animation: ${animateText} 1s ease;
    transition: 1s;

    @media screen and (max-width:1300px) {
        top: 27%;
        left: 43%;
    }

    @media screen and (max-width:1100px) {
        top: 20%;
        left: 37%;
        font-size: 1.7em;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        font-size: 1.25em;
        top: 25%;
        left: 28%;
    }
`;

export const ProductParticles = styled.div`
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, .1);
    border-radius: 50%;
    position: absolute;

    &:nth-child(1) {
        top: 70%;
        left: 15%;
        animation: ${animateParticle} 4s ease;
    }
    &:nth-child(2) {
        top: 80%;
        left: 30%;
        animation: ${animateParticle} 3s ease;
    }
    &:nth-child(3) {
        top: 65%;
        left: 40%;
        animation: ${animateParticle} 5s ease;
    }
    &:nth-child(4) {
        top: 80%;
        left: 55%;
        animation: ${animateParticle} 4.5s ease;
    }
    &:nth-child(5) {
        top: 60%;
        left: 60%;
        animation: ${animateParticle} 3.5s ease;
    }
    &:nth-child(6) {
        top: 70%;
        left: 75%;
        animation: ${animateParticle} 5.5s ease;
    }
    &:nth-child(7) {
        top: 55%;
        left: 82%;
        animation: ${animateParticle} 2.5s ease;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 30px;
        height: 30px;
    }
`;

export const ProductArrows = styled.div`
    position: absolute;
    width: 30%;
    height: 5%;
    font-size: 2.5em;
    color: white;
    top: 72%;
    left: 52%;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    pointer-events: all;

    @media screen and (max-width: 1300px) {
        width: 45%;
        top: 80%;
        left: 43%;
    }

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        width: 60%;
        top: 80%;
        left: 25%;
    }

    @media screen and (max-width: 450px) and (max-height: 850px) {
        width: 95%;
        top: 82%;
        left: 2.5%;
    }
`;