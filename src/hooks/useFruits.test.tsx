import { renderHook, act } from '@testing-library/react-hooks'
import { useFruits } from './useFruits'
import { fruits as mockFruits } from '~/utils/fruitsMock'

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

describe('useFruits hook', () => {
  it('should load fruits and set loading state correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFruits())

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(false)
    expect(result.current.fruits).toEqual(mockFruits)
  })

  it('should handle change and filter fruits correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFruits())

    await waitForNextUpdate()

    act(() => {
      const event = {
        target: { value: 'apple' },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.handleChange(event)
    })

    expect(result.current.fruits[0].title).toBe('Abacaxi')
    expect(result.current.fruits.length).toBe(5)
    expect(result.current.isLoading).toBe(false)
  })
})
