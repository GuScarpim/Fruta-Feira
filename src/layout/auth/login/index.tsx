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
    <Section data-testId="layout-login-section">
      <ArticleBackground data-testId="article-background">
        <Content data-testId="article-content">
          <Title data-testId="layout-login-title">FrutaFeira</Title>
          <SubTitle data-testId="layout-login-subtitle">
            Compre aqui e deixe a sua vida mais suculenta!
          </SubTitle>
        </Content>
      </ArticleBackground>
      <ArticleForm data-testId="article-form">{children}</ArticleForm>
    </Section>
  )
}

export default LayoutLogin
