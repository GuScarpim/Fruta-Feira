import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ToastContainer from '.'

test('ToastContainer renders correctly', () => {
  const { container } = render(<ToastContainer />)

  const toastContainer = container.querySelector('.Toastify')
  expect(toastContainer).toBeInTheDocument()
})
