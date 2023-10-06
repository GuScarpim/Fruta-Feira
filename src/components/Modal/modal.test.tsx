import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ComponentModal from '.'
import Container from '~/__mocks__/container'

test('ComponentModal renders correctly', () => {
  const onCloseMock = jest.fn()
  const title = 'Test Modal'
  const openModal = true

  const { getByText, getByTestId } = render(
    <Container>
      <ComponentModal
        openModal={openModal}
        onClose={onCloseMock}
        title={title}
      />
    </Container>,
  )

  expect(getByText(title)).toBeInTheDocument()
  expect(getByTestId('modal')).toBeInTheDocument()
  fireEvent.click(getByTestId('close-button'))
  expect(onCloseMock).toHaveBeenCalled()
})
