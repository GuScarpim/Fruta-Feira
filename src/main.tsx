import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Themes from '~/styles/Themes'
import GlobalStyles from '~/styles/Global'
import Routes from '~/routes'

const root = document.getElementById('root')
render(
  <StrictMode>
    <ThemeProvider theme={Themes}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  root,
)