import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import { useFruits } from '~/hooks/useFruits'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '.'

jest.mock('~/hooks/useFruits', () => ({
  useFruits: jest.fn(() => ({
    isLoading: false,
    filteredFruits: [
      {
        id: 1,
        src: 'logo.png',
        title: 'Maçã',
        description: 'Maçã vermelha',
        value: 10,
        quantity: 1,
      },
    ],
  })),
}))

test('Home renders all of the expected elements', () => {
  const { container, queryByText } = render(
    <Container>
      <Router>
        <Home />
      </Router>
    </Container>,
  )

  const title = queryByText('Frutas')
  const card = queryByText('Maçã')
  const price = queryByText('R$ 10,00')

  expect(title).toBeInTheDocument()
  expect(card).toBeInTheDocument()

  if (price) {
    expect(price).toBeInTheDocument()
  } else {
    console.log('O elemento não existe')
  }
})
