import { render, fireEvent } from '@testing-library/react'
import FormLogin from '.'
import Container from '~/__mocks__/container'

describe('FormLogin', () => {
  const onSubmitMock = jest.fn()
  const validationSchemaMock = {}

  test('FormLogin renders all of the expected elements', () => {
    const { queryByTestId } = render(
      <Container>
        <FormLogin
          onSubmit={onSubmitMock}
          validationSchema={validationSchemaMock}
        />
      </Container>,
    )

    expect(queryByTestId('email-label')).toBeInTheDocument()
    expect(queryByTestId('email-input')).toBeInTheDocument()
    expect(queryByTestId('senha-label')).toBeInTheDocument()
    expect(queryByTestId('senha-input')).toBeInTheDocument()
    expect(queryByTestId('submit-button')).toBeInTheDocument()
  })
})
