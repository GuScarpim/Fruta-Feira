import { render } from '@testing-library/react'
import Cards from './index'
import Container from '~/__mocks__/container'

describe('Cards component', () => {
  test('renders with correct props', () => {
    const mockData = {
      fruitId: 1,
      src: 'frutaFera.png',
      title: 'Banana',
      value: 2.5,
      description: 'A delicious Banana.',
      quantity: 3,
    }

    const { getByText, getByTestId } = render(
      <Container>
        <Cards {...mockData} />
      </Container>,
    )

    expect(getByText('Banana')).toBeInTheDocument()
    expect(getByText('A delicious Banana.')).toBeInTheDocument()
    expect(getByTestId('buttonGroup-values')).toHaveTextContent('3')
  })
})
