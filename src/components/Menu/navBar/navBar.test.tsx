import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '.'
import Container from '~/__mocks__/container'

describe('Navbar', () => {
  test('Search input works correctly', () => {
    const { queryByTestId } = render(
      <Container>
        <Router>
          <Navbar />
        </Router>
      </Container>,
    )

    const searchInput = queryByTestId('search-icon') as HTMLElement

    expect(searchInput).toHaveValue('')

    fireEvent.change(searchInput, { target: { value: 'banana' } })

    expect(searchInput).toHaveValue('banana')
  })
})
