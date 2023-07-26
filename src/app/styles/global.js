'use client'

import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`

:root{
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;

    --color-orange-300: ${({theme}) => theme.COLORS.orange_300};
    --color-orange-400: ${({theme}) => theme.COLORS.orange_400};
    --color-orange-800: ${({theme}) => theme.COLORS.orange_800};
    --color-red: ${({theme}) => theme.COLORS.red};
    --color-red-200: ${({theme}) => theme.COLORS.red_200};
}
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
  
}

body{
   background: var(--color-orange-300);
   font-size: 1.6rem;
   font-family: var(--font-roboto);
   color: var(--color-red);
}

a{
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}

h1,h2,h3,h4,h5,span{
    font-family: var(--font-poppins);
}
`