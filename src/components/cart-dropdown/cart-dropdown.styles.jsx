import styled, {keyframes} from "styled-components";

const animate = keyframes`
    from{  
        transform: scale(0);
        border-radius: 10%;
    }
    to{
        transform: scale(1);
        border-radius: none;
    }
`;

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 3px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    border-radius: 25px;
    z-index: 15;
    background: rgb(207, 188, 153);
    animation: ${animate} .5s;

    @media screen and (max-width: 850px) and (max-height: 450px) {
        width: 350px;
        height: 370px;  
        transform: translate(-80%, -20%);
    }

    @media screen and (max-width: 670px) and (max-height: 375px) {
        width: 360px;
        height: 320px;
        transform: translate(-45%, -28%);
    }

    @media screen and (max-width: 375px) and (max-height: 670px) {
        width: 320px;
        height: 380px;
        transform: translate(12%, -10%);
    }
`;

export const CartDropDownItems = styled.div`
    height: 370px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;  

export const CartDropDownMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
    color: white;
`;