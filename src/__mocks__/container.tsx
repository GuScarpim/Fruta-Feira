import { ThemeProvider } from 'styled-components'
import Themes from '~/styles/Themes'

interface IContainer {
  children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
  return <ThemeProvider theme={Themes}>{children}</ThemeProvider>
}

export default Container
