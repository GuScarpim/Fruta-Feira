import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import LayoutLogin from '.'

test('LayoutLogin renders all of the expected elements', () => {
  const { queryByTestId } = render(
    <Container>
      <LayoutLogin>Teste</LayoutLogin>
    </Container>,
  )

  expect(queryByTestId('layout-login-section')).toBeInTheDocument()
  expect(queryByTestId('article-background')).toBeInTheDocument()
  expect(queryByTestId('article-content')).toBeInTheDocument()
  expect(queryByTestId('layout-login-title')).toBeInTheDocument()
  expect(queryByTestId('layout-login-subtitle')).toBeInTheDocument()
  expect(queryByTestId('article-form')).toBeInTheDocument()
})
