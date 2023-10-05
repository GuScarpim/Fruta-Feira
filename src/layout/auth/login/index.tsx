import { ReactNode } from 'react'
import {
  Section,
  ArticleBackground,
  Content,
  Title,
  SubTitle,
  ArticleForm,
} from './styles'

interface LayoutLoginProps {
  children: ReactNode
}

const LayoutLogin: React.FC<LayoutLoginProps> = ({ children }: LayoutLoginProps) => {
  return (
    <Section>
      <ArticleBackground>
        <Content>
          <Title>FrutaFeira</Title>
          <SubTitle>Compre aqui e deixe a sua vida mais suculenta!</SubTitle>
        </Content>
      </ArticleBackground>
      <ArticleForm>{children}</ArticleForm>
    </Section>
  )
}

export default LayoutLogin
