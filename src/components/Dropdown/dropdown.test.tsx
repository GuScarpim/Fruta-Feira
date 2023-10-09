import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '~/__mocks__/container'
import User from '.'

test("Dropdown menu opens and closes when the user's name is clicked", () => {
  const { queryByTestId } = render(
    <Container>
      <Router>
        <User />
      </Router>
    </Container>,
  )

  const userNameElement = queryByTestId('user-name') as HTMLElement

  expect(queryByTestId('dropdown-menu')).toBeNull()

  fireEvent.click(userNameElement)

  expect(queryByTestId('dropdown-menu')).toBeInTheDocument()

  fireEvent.click(userNameElement)

  expect(queryByTestId('dropdown-menu')).toBeNull()
})
