import Navbar from '~/components/Menu/navBar'
import { Section } from './styles'
import Footer from '../footer'

interface IContainer {
  children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
  return (
    <>
      <Navbar />
      <Section data-testId="layout-container-section">{children}</Section>
      <Footer />
    </>
  )
}

export default Container
