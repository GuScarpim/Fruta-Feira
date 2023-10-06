import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import { BrowserRouter as Router } from 'react-router-dom'
import MyContainer from '.'

test('MyContainer renders all of the expected elements', () => {
  const { queryByTestId } = render(
    <Container>
      <Router>
        <MyContainer>Teste</MyContainer>
      </Router>
    </Container>,
  )

  expect(queryByTestId('layout-container-section')).toBeInTheDocument()
})
