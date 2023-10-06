import { renderHook, act } from '@testing-library/react-hooks'
import { useLogin } from './useLogin'

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigateMock,
}))

const navigateMock = jest.fn()

describe('useLogin hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should handle successful login', async () => {
    const { result } = renderHook(() => useLogin())

    const fakeLoginMock = jest.fn().mockResolvedValue({
      token: 'fakeToken123',
      name: 'Gustavo',
    })

    jest.mock('./useLogin', () => ({
      ...jest.requireActual('./useLogin'),
      fakeLogin: fakeLoginMock,
    }))

    await act(async () => {
      await result.current.onSubmit({
        email: 'gustavo@gmail.com',
        password: '123',
      })
    })

    expect(result.current.isLoading).toBe(false)

    expect(navigateMock).toHaveBeenCalledWith('/home')
  })

  it('should handle unsuccessful login', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin())

    const fakeLoginMock = jest
      .fn()
      .mockRejectedValue(new Error('Credenciais inválidas'))

    jest.mock('./useLogin', () => ({
      ...jest.requireActual('./useLogin'),
      fakeLogin: fakeLoginMock,
    }))

    act(() => {
      result.current.onSubmit({ email: 'invalid@gmail.com', password: 'wrong' })
    })

    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(false)
  })
})
