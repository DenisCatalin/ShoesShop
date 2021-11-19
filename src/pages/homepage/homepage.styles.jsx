import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import bgImage from '../../assets/bgImage.png';
import homepageBG from '../../assets/homepageBG.png';

const redishColor = '#D63048';

const animate = keyframes`
    0% { transform: translateY(100%); opacity: 0; }
    60% { transform: translateY(-1%); }
    70% { transform: translateY(1%); }
    80% { transform: translateY(-1%); }
    90% { transform: translateY(1%); }
    100% { opacity: 1; }
`;

const animateDiscover = keyframes`
    0% { transform: translateX(-50%) translateY(-50%); opacity: 0; }
    60% { transform: translateX(-50%) translateY(-1%); }
    70% { transform: translateX(-50%) translateY(1%); }
    80% { transform: translateX(-50%) translateY(-1%); }
    90% { transform: translateX(-50%) translateY(1%); }
    100% { opacity: 1; }
`;

const animateButton = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const HomepageBackground = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
`;

export const HomepageOpacity = styled.div`
    background-image: url(${homepageBG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const HomepageHero = styled.div`
    width: 100%;
    height: 90vh;
`;

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: ${animate} 1s ease-in-out;
`;

export const WelcomeText = styled.h1`
    color: white;
    font-size: 4.5em;
    font-weight: bold;
    letter-spacing: 2px;

    @media screen and (max-width: 1700px) {
        font-size: 4em;
    }

    @media screen and (max-width: 850px) {
        font-size: 3.5em;
    }

    @media screen and (max-width: 550px) {
        font-size: 3em;
    }

    @media screen and (max-width: 450px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 370px) {
        font-size: 1.8em;
    }
`;

export const WelcomeTextColor = styled.span`
    color: ${redishColor};
    font-size: 4.5em;
    font-weight: bold;
    letter-spacing: 2px;

    @media screen and (max-width: 1700px) {
        font-size: 4em;
    }

    @media screen and (max-width: 850px) {
        font-size: 3.5em;
    }

    @media screen and (max-width: 550px) {
        font-size: 3em;
    }

    @media screen and (max-width: 450px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 370px) {
        font-size: 1.8em;
    }
`;

export const DiscoverContainer = styled.div`
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: ${animateDiscover} 1s ease-in-out;

    @media screen and (max-width: 1700px) {
        width: 55%;
    }

    @media screen and (max-width: 1380px) {
        width: 60%;
    }

    @media screen and (max-width: 1180px) {
        width: 90%;
    }

    @media screen and (max-width: 725px) {
        width: 100%;
    }
`;

export const DiscoverText = styled.h2`
    color: white;
    font-size: 3.5em;
    font-weight: bold;
    letter-spacing: 2px;
    margin:0 40px;
    
    @media screen and (max-width: 1550px) {
        font-size: 3em;
    }

    @media screen and (max-width: 850px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 660px) {
        font-size: 2em;
    }

    @media screen and (max-width: 550px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 360px) {
        font-size: 1em;
    }
`;

export const DiscoverTextColor = styled.span`
    color: ${redishColor};
    font-weight: bold;
    letter-spacing: 2px;
`;

export const HomepageButton = styled(Link)`
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${redishColor};
    position: absolute;
    left: 50%;
    top: 80%;
    width: 15%;
    height: 10%;
    border-radius: 50px;
    transform: translateX(-50%);
    font-size: 2em;
    border: none;
    outline: none;
    cursor: pointer;
    animation: ${animateButton} 2.5s ease;

    @media screen and (max-width: 1250px) {
        width: 20%;
    }

    @media screen and (max-width: 1000px) {
        height: 8%;
    }
    
    @media screen and (max-width: 910px) {
        width: 25%;
    }

    @media screen and (max-width: 700px) {
        width: 30%;
    }

    @media screen and (max-width: 625px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 425px) {
        font-size: 1.5em;
        width: 35%;
    }

    @media screen and (max-width: 380px) {
        font-size: 1.2em;
        width: 40%;
    }
`;