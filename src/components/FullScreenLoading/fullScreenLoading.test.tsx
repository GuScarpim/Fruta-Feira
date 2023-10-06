import { render } from '@testing-library/react'
import Container from '~/__mocks__/container'
import FullScreenLoading from '.'

describe('FullScreenLoading', () => {
  test('FullScreenLoading renders all of the expected elements', () => {
    const { queryByTestId } = render(
      <Container>
        <FullScreenLoading />
      </Container>,
    )

    expect(queryByTestId('loading-container')).toBeInTheDocument()
    expect(queryByTestId('spinner')).toBeInTheDocument()
  })
})
