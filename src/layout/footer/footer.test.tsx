import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import Footer from '.'

test('Footer renders all of the expected elements', () => {
  const { queryByTestId } = render(
    <Container>
      <Footer />
    </Container>,
  )

  expect(queryByTestId('footer')).toBeInTheDocument()
})
