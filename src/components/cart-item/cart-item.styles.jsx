import styled from "styled-components";

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
    padding: 5px;
    border-bottom: 2px solid rgba(0, 0, 0, .1);


    @media screen and (max-width: 450px) {
        font-size: .8em;
    }
`;

export const CartItemDetails = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    color: black;

    @media screen and (max-width: 450px) {
        font-size: .8em;
    }
`;

export const CartItemFontSizeText = styled.span`
    width: 100%;
    font-size: .8em;
    font-weight: 100;

    @media screen and (max-width: 450px) {
        font-size: 1em;
    }

`;