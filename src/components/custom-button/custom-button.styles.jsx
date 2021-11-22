import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    border-radius: 50px;

    &:hover {
        background-color: white;
        color: black;
        border-radius: 50px;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    transform: translateY(-200%);
    border-radius: 50px;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color: #4285F4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) return googleSignInStyles;

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 155px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    border-radius: 50px;
    font-size: 15px;
    border: none;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;