import { injectGlobal as css } from '@emotion/css';

export const injectGlobalStyle = () => css`
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    font-display: swap;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;
