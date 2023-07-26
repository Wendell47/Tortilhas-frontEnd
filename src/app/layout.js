

import GlobalStyle from './styles/global'
import {Roboto, Poppins, Caveat} from 'next/font/google'
import theme from './styles/theme'
import StyledComponentsRegistry from './lib/registry'
import Navbar from './components/Navbar'
import Theme from './styles/themeprovider'



const roboto = Roboto({
    subsets:['latin'],
    variable:'--font-roboto',
    weight:['400','500','700'],
    display:'swap',
})
const poppins = Poppins({
    subsets:['latin'],
    variable:'--font-poppins',
    weight:['400','500','700'],
    display:'swap',
})
const caveat = Caveat({
    subsets:['latin'],
    variable:'--font-caveat',
    weight:['400','700'],
    display:'swap',
})


export const metadata = {
  title: 'tortilhas sua favorita',
  description: 'application of a restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${poppins.variable} ${caveat.variable}`}>
      <StyledComponentsRegistry>
        <Theme theme={theme}>
          <GlobalStyle/>
            <Navbar/>
             {children}
             </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
