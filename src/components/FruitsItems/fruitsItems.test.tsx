import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import FruitsItems from '.'

describe('FruitsItems', () => {
  const fruit = {
    src: '~/assets/fruits/abacaxi.png',
    title: 'Abacaxi',
    value: 2.5,
  }
  test('FruitsItems renders all of the expected elements', () => {
    const { queryByTestId } = render(
      <Container>
        <FruitsItems {...fruit} />
      </Container>,
    )

    expect(queryByTestId('fruits-items-image')).toBeInTheDocument()
    expect(queryByTestId('fruits-items-title')).toBeInTheDocument()
    expect(queryByTestId('fruits-items-price')).toBeInTheDocument()
  })
})
