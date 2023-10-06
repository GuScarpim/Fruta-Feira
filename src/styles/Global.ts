import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *{
    font-family: 'Inter', sans-serif;
  }
  body {
    min-width: 100vw;
    min-height: 100vh;
    line-height: 1;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    background-color: #FAFAFA;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  b{
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body, #__next {
    width: 100%;
    overflow-x: hidden;
    overflow-y: srcoll;
  }

/* width */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000;
  height: 0px;
}

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default GlobalStyles
