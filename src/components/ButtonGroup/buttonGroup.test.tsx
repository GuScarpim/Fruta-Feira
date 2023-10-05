/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable global-require */
import { render, fireEvent } from '@testing-library/react'
import ButtonGroup from './index'
import Container from '../__tests__/mock/container'

test('ButtonGroup renders correctly', () => {
  const { container } = render(<ButtonGroup fruitId={1} quantity={3} />)
  expect(container).toMatchSnapshot()
})

test('Clicking minus button calls removeOneFruit with correct arguments', () => {
  const { getByTestId } = render(
    <Container>
      <ButtonGroup fruitId={1} quantity={3} />
    </Container>,
  )

  fireEvent.click(getByTestId('buttonGroup-minus-button'))

  expect(require('~/store/fruit').removeOneFruit).toHaveBeenCalledWith(1)
})

test('Clicking plus button calls addOneFruit with correct arguments', () => {
  const { getByTestId } = render(
    <Container>
      <ButtonGroup fruitId={1} quantity={3} />
    </Container>,
  )

  fireEvent.click(getByTestId('buttonGroup-plus-button'))

  expect(require('~/store/fruit').addOneFruit).toHaveBeenCalledWith(1)
})
