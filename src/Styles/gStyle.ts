import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
        font-family: 'Poppins';
        src:url('https://fonts.googleapis.com/css2?family=Poppins&display=swap') format('otf');
    }

@font-face {
    font-family: 'Roboto';
    src:url("ttps://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap") format('otf');
}

* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
    a {text-decoration: none ;
      text-decoration: none;
      color: black;
    }
    a:link {text-decoration: none}
    a:visited {text-decoration: none }
    a:active {text-decoration: none }

    ::-webkit-scrollbar {
      height: 7px;
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #ddd; 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #ddd; 
    }
}

body {
    background: linear-gradient(-45deg, #FDCB9E, #FDCBfE) fixed;
    /* background: rgba(253, 203, 158, 0.25); */
}
`;
