import styled from "styled-components";
export const Styles = styled("div")`
  .snackbar {
    margin-top: 24px;
    width: fit-content;
    max-width: 404px;
    padding: 14px 16px 16px 12px;
    background-color: ${({ theme }) => theme.colors.SNACKBAR_BACKGROUND};
    box-shadow: ${({ theme }) => theme.shadows.md};
    color: ${({ theme }) => theme.colors.SNACKBAR_TEXT}!important;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.15px;
  }
  svg {
    fill: ${({ theme }) => theme.colors.SNACKBAR_TEXT};
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
    color: ${({ theme }) => theme.colors.SNACKBAR_TEXT};
    padding: 0px;
    margin-left: 28px;
    padding-top: 2px;
    background-color: ${({ theme }) =>
      theme.colors.SNACKBAR_BACKGROUND}!important;
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.SNACKBAR_BACKGROUND}!important;
      color: ${({ theme }) => theme.colors.INACTIVE};
    }
  }
  .button-right {
    margin-left: auto;
    margin-top: 14px;
  }
  a {
    color: ${({ theme }) => theme.colors.SNACKBAR_TEXT};
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      text-decoration: none;
    }
    p {
      color: ${({ theme }) => theme.colors.SNACKBAR_TEXT};
      line-height: 22px;
      text-align: justify;
    }
  }
`;
