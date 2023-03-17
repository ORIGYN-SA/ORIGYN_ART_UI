import styled from "styled-components";
export const Styles = styled("div")`
  .snackbar {
    margin-top: 24px;
    width: fit-content;
    max-width: 404px;
    padding: 12px 16px 16px 12px;
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
    box-shadow: 0px 1px 12px rgba(18, 18, 18, 0.04),
      0px 0px 4px rgba(18, 18, 18, 0.08);
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.15px;
    color: ${({ theme }) => theme.colors.TEXT};
  }
  svg {
    fill: currentColor;
    width: 15px;
    height: 15px;
    viewbox: 0 0 15 15;
  }
  .svgBox {
    padding-top: 2px;
    margin-right: 9px;
  }
  .container {
    display: flex;
  }
  .container-block {
    display: block;
    text-align: justify;
  }

  button {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.colors.TEXT};
    padding: 0px;
    margin-left: 28px;
    padding-top: 2px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.TEXT}06;
    }
  }
  .button-right {
    margin-left: auto;
    margin-top: 14px;
  }
  a {
    text-decoration: underline;
    font-weight: 600;
    color: #fff;

    &:hover {
      text-decoration: none;
    }
    p {
      line-height: 22px;
      text-align: justify;
    }
  }
`;
