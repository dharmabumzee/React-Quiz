import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    background: linear-gradient(to right, #77a1d3 0%, #79cbca 51%, #77a1d3 75%);
    border-color: #000000;
    border-radius: 10px;
    min-width: 240px !important;
    height: 55px !important;
    font-size: 16px !important;
    font-weight: 900;
    color: #2b2828;

    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    font-weight: 900;
    width: 100%;
    // height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #00873D, #00C781)"
        : !correct && userClicked
        ? "linear-gradient(to right, #cc0000, #8f0c00)"
        : "linear-gradient(to right, #77a1d3 0%, #79cbca 51%, #77a1d3 100%)"};

    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);

    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
