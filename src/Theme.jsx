import React from "react";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const green_theme = `:root {
    --rootColor: linear-gradient(
      180deg,
      rgba(140, 200, 224, 0.75) 0%,
      rgba(140, 200, 224, 0.4) 100%
    );
    --htmlColor: rgba(140, 200, 224, 0.4);
    --nav-color: rgba(78, 139, 65, 1);
    --main-color: rgba(78, 139, 65, 1);
    --button-color: rgba(251, 213, 95, 1);
    --button-color-hover: rgb(109, 93, 46);
    --cartItemColor: rgba(251, 213, 95, 0.2);
    --itemBoxBackground: rgba(244, 244, 244, 0.5);
    --deleteButton: red;
    --cartTotalBack: rgba(251, 213, 95, 0.2);
    --cartInput: rgba(180, 179, 179, 0.877);
    --productInfoBack: rgba(251, 213, 95, 0.2);
    --productInfoDescrip: rgba(78, 139, 65, 0.7);
    --categoryProductBack: rgba(251, 213, 95, 0.2);
    --checkout-button-hover: orange
  }`;

const red_theme = `:root {
    --rootColor: linear-gradient(
      180deg,
      rgba(140, 200, 224, 0.75) 0%,
      rgba(140, 200, 224, 0.4) 100%
    );
    --htmlColor: rgba(140, 200, 224, 0.4);
    --nav-color: #9a6d6d;
    --main-color: #9a6d6d;
    --button-color: #45b3f1;
    --button-color-hover: #27c500;
    --cartItemColor: rgba(244, 244, 244, 0.5);
    --itemBoxBackground: rgba(244, 244, 244, 0.5);
    --deleteButton: red;
    --cartTotalBack: rgba(244, 244, 244, 0.5);
    --productInfoBack: rgba(140, 200, 224, 0.15);
    --productInfoDescrip: rgba(181, 203, 211, 0.97);
    --categoryProductBack: rgba(244, 244, 244, 0.5);
  }`;

const GlobalStyles = createGlobalStyle`${green_theme}`;

const Theme = () => {
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  );
};

export default Theme;
