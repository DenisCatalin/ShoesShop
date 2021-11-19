import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const redishColor = '#D63048';

const animate = keyframes`
    0% { transform: translateY(-100%); opacity: 0; }
    60% { transform: translateY(-3%); }
    70% { transform: translateY(3%); }
    80% { transform: translateY(-3%); }
    90% { transform: translateY(3%); }
    100% { opacity: 1; }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    padding: 1rem;
    animation: ${animate} 1s ease-in-out;
`;

export const LogoText = styled.h2`
    width: 80%;
    font-size: 2em;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 1450px) {
        width: 75%;
    }
    @media screen and (max-width: 1150px) {
        width: 70%;
    }
    @media screen and (max-width: 950px) {
        width: 65%;
    }
    @media screen and (max-width: 950px) {
        width: 65%;
    }
    @media screen and (max-width: 820px) {
        width: 55%;
    }
`; 

export const SpanColor = styled.span`
    color: ${redishColor};
`;

export const HeaderLinksContainer = styled.div`
    width:20%;
    display:flex;
    justify-content: space-between;
    align-items:center;

    @media screen and (max-width: 1450px) {
        width: 25%;
    }

    @media screen and (max-width: 1150px) {
        width: 30%;
    }

    @media screen and (max-width: 950px) {
        width: 35%;
    }

    @media screen and (max-width: 820px) {
        width: 45%;
    }

    @media screen and (max-width: 660px) {
        display: none;
    }
`;

export const HeaderLink = styled(Link)`
    cursor: pointer;
    color: white;
    font-size: 1.2em;
`;

export const HeaderMenu = styled.button`
    color: white;
    font-size: 2em;
    position: absolute;
    left: 90%;
    display: none;
    background: none;
    border: none;
    outline: none;

    @media screen and (max-width: 660px) {
        display: initial;
    }
`;