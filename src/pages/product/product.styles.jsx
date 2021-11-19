import styled, {keyframes} from "styled-components";

import bgImage from '../../assets/bgImage.png';
import sneakers1BG from '../../assets/sneakers1BG.png';
import sneakers1 from '../../assets/sneakers1.png';

const animateCircle = keyframes`
    from { transform: translateX(100%); }
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

export const ProductBackground = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

export const ProductOpacity = styled.div`
    background-image: url(${sneakers1BG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s;
`;

export const ProductContent = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
`;

export const LeftSideContent = styled.div`
    width: 40%;
    height: 80vh;
`;

export const RightSideContent = styled.div`
    width: 60%;
    height: 90vh;
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    position: relative;
`;

export const ProductContentText = styled.div`
    width: 100%;
    height: 60%;
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
`;

export const ProductSizeContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-left: 10em;
    animation: ${animateSizeContainer} 1.4s ease;

    @media screen and (max-width: 1300px) {
        margin-left: 5em;
    }
`;

export const ProductSizeTitle = styled.h2`
    color: white;
    font-style: italic;
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

    @media screen and (max-width: 1024px) {
        width: 370px;
        height: 370px;
        transform: translate(30%, -15%);
    }
`;

export const Product = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${sneakers1});
    background-repeat: no-repeat;
    transform: rotateZ(-15deg);
    position: absolute;
    top: 15%;
    left: 48%;
    z-index: 2;
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

export const ProductButtons = styled.div`
    position: absolute;
    width: 45%;
    height: 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 83%;
    left: 45%;

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

    @media screen and (max-width: 1300px) {
        font-size: 1.2em;
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

    @media screen and (max-width: 1300px) {
        font-size: 1.2em;
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
`;