import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-red-900: #a10d0d;
    --color-red-800: #c01515;
    --color-red-700: #d21919;
    --color-red-600: #e51e1e;
    --color-red-500: #f32121;
    --color-red-400: #f54242;
    --color-red-300: #f66464;
    --color-red-200: #f99090;
    --color-red-100: #fbbbbb;
    --color-gray-900: #212121;
    --color-gray-800: #424242;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-200: #eeeeee;
    --color-gray-100: #f5f5f5;

    font-size: 60%;   
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;