import { render, fireEvent } from '@testing-library/react'
import useFruitStore from '~/store/fruit'

const addOneFruitSpy = jest.spyOn(useFruitStore.getState(), 'addOneFruit')
const removeOneFruitSpy = jest.spyOn(useFruitStore.getState(), 'removeOneFruit')

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

  test('calls addOneFruit when plus button is clicked', () => {
    const { getByTestId } = render(<TestComponent />)

    fireEvent.click(getByTestId('buttonGroup-plus-button'))

    expect(addOneFruitSpy).toHaveBeenCalledWith(1)
  })

  test('calls removeOneFruit when minus button is clicked', () => {
    const { getByTestId } = render(<TestComponent />)

    fireEvent.click(getByTestId('buttonGroup-minus-button'))

    expect(removeOneFruitSpy).toHaveBeenCalledWith(1)
  })
})
