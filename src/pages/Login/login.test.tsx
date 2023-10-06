import { render } from '@testing-library/react'
import Login from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '~/__mocks__/container'

test('Login renders all of the expected elements', () => {
  const { getByTestId } = render(
    <Container>
      <Router>
        <Login />
      </Router>
    </Container>,
  )

  const login = getByTestId('login')

  expect(login).toBeInTheDocument()
})
