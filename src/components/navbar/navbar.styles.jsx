import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

const animate = keyframes`
    from { transform: translateX(50%); }
`;

export const NavbarContainer = styled.div`
    width: 50%;
    height:100vh;
    background: #333;
    position: absolute;
    left: 50%;
    z-index: 10;
    animation: ${animate} 1s;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 850px) and (max-height: 450px) {
        width: 35%;
        left: 65%;
    }
`;

export const HeaderLink = styled(Link)`
    cursor: pointer;
    color: white;
    font-size: 1.2em;

    @media screen and (max-width: 670px) and (max-height: 375px) {
        font-size: 1em;
    }
`;

export const SignInLink = styled.h2`
    cursor: pointer;
    color: white;
    font-size: 1.2em;
    font-weight: lighter;

    @media screen and (max-width: 670px) and (max-height: 375px) {
        font-size: 1em;
    }
`;