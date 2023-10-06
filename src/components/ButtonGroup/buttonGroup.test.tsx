import { render, fireEvent } from '@testing-library/react'

import ButtonGroup from './index'

describe('ButtonGroup', () => {
  const removeOneFruit = () => { }
  const addOneFruit = () => { }
  test('renders the component', () => {
    const { getByTestId } = render(<ButtonGroup fruitId={1} quantity={3} />)

    expect(getByTestId('buttonGroup-minus-button')).toBeInTheDocument()
    expect(getByTestId('buttonGroup-plus-button')).toBeInTheDocument()
    expect(getByTestId('buttonGroup-values')).toHaveTextContent('3')
  })
})
