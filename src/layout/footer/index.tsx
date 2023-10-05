import {
  Container,
  Content,
  ArticleLocalization,
  SectionContact,
  SectionSponsor,
} from './styles'

import { BsHeadset } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import Logo from '~/assets/logo/logo.png'

const Footer = () => {
  return (
    <Container>
      <Content>
        <ArticleLocalization>
          <h1>Localização</h1>
          <article>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>+55 11 98765-4321</p>
          </article>
        </ArticleLocalization>

        <SectionContact>
          <section>
            <button type='button'>
              <IoIosMail />
              Entre em contato
            </button>
            <button type='button'>
              <BsHeadset />
              Consultor online
            </button>
          </section>
        </SectionContact>

        <SectionSponsor>
          <img alt='Logo' src={Logo} />
        </SectionSponsor>
      </Content>
    </Container>
  )
}

export default Footer
