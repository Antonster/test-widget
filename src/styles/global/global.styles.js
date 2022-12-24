import { css } from '@emotion/react';
import { MontserratBold, MontserratMedium, MontserratRegular, MontserratSemiBold } from '@fonts';

export const global = css`
  // Reset css
  // Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  // Preferred box-sizing value
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Remove list styles (bullets/numbers)
  ol,
  ul {
    list-style: none;
  }

  // For images to not be able to exceed their container and clear images bottom space
  img {
    max-width: 100%;
    display: block;
  }

  // Removes spacing between cells in tables
  table {
    border-collapse: collapse;
  }

  // Revert the 'white-space' property for textarea elements on Safari
  textarea {
    white-space: revert;
  }

  // fonts
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold});
    font-weight: 700;
    font-style: normal;
  }
`;
