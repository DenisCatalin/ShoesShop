import styled, { css } from "styled-components";
import bgImage from '../../assets/bgImage2.png';

export const CheckoutMainPageContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 450px) {
        width: 99%;
    }
`;

export const CheckoutPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CheckoutPageHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    color: white;
    
`;

const headerSpacing = css`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        &:last-child {
            transform:translateX(-45%);
        }
    }
`;

export const CheckoutHeaderSpacing = styled.div`
    ${headerSpacing}
`;

export const CheckoutPageTotal = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    color: white;
    
`;