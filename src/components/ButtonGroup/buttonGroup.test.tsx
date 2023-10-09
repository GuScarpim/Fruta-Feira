import { render, fireEvent } from '@testing-library/react'
import useFruitStore from '~/store/fruit'

const addFruitByIdSpy = jest.spyOn(useFruitStore.getState(), 'addFruitById')
const removeFruitByIdSpy = jest.spyOn(useFruitStore.getState(), 'removeFruitById')

import Container from '~/__mocks__/container'
import ButtonGroup from './index'

const TestComponent = () => {
  return (
    <Container>
      <ButtonGroup fruitId={1} quantity={3} />
    </Container>
  )
}

describe('ButtonGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the component', () => {
    const { getByTestId } = render(<TestComponent />)

    expect(getByTestId('buttonGroup-minus-button')).toBeInTheDocument()
    expect(getByTestId('buttonGroup-plus-button')).toBeInTheDocument()
    expect(getByTestId('buttonGroup-values')).toHaveTextContent('3')
  })

  test('calls addFruitById when plus button is clicked', () => {
    const { getByTestId } = render(<TestComponent />)

    fireEvent.click(getByTestId('buttonGroup-plus-button'))

    expect(addFruitByIdSpy).toHaveBeenCalledWith(1)
  })

  test('calls removeFruitById when minus button is clicked', () => {
    const { getByTestId } = render(<TestComponent />)

    fireEvent.click(getByTestId('buttonGroup-minus-button'))

    expect(removeFruitByIdSpy).toHaveBeenCalledWith(1)
  })
})
