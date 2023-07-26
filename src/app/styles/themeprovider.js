'use client'

import { ThemeProvider } from 'styled-components'

export default function Theme({theme, children}){
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}