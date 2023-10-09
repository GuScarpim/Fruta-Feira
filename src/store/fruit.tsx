import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IFruit {
  id: number
  quantity: number
  src: string
  title: string
  value: number
  description: string
}

interface FruitStore {
  fruits: IFruit[]
  filteredFruits: IFruit[]
  totalQuantity: number
  totalValue: number
}

interface FruitStoreActions {
  setFruits: (fruits: IFruit[]) => void
  removeFruitById: (fruitId: number) => void
  addFruitById: (fruitId: number) => void
  setSearchTerm: (term: string) => void
  clearFruitsData: () => void
}

const initialState: FruitStore = {
  fruits: [],
  filteredFruits: [],
  totalQuantity: 0,
  totalValue: 0,
}

const storageName = 'storage-frutas'

const useFruitStore = create(
  persist<FruitStore & FruitStoreActions>(
    set => ({
      ...initialState,
      setFruits: fruits => {
        const newTotalQuantity = fruits.reduce(
          (acc, fruit) => acc + fruit.quantity,
          0,
        )
        const newTotalValue = fruits.reduce(
          (acc, fruit) => acc + fruit.value * fruit.quantity,
          0,
        )
        set({
          fruits,
          filteredFruits: fruits,
          totalQuantity: newTotalQuantity,
          totalValue: newTotalValue,
        })
      },
      removeFruitById: fruitId =>
        set(state => {
          const removedFruit = state.fruits.find(fruit => fruit.id === fruitId)
          if (!removedFruit || removedFruit.quantity <= 0) {
            return state
          }

          const removedFruitValue = removedFruit.value

          const newTotalQuantity = Math.max(0, state.totalQuantity - 1)
          const newTotalValue = Math.max(
            0,
            state.totalValue - removedFruitValue,
          )

          return {
            fruits: state.fruits.map(fruit =>
              fruit.id === fruitId
                ? { ...fruit, quantity: Math.max(0, fruit.quantity - 1) }
                : fruit,
            ),
            filteredFruits: state.filteredFruits.map(fruit =>
              fruit.id === fruitId
                ? { ...fruit, quantity: Math.max(0, fruit.quantity - 1) }
                : fruit,
            ),
            totalQuantity: newTotalQuantity,
            totalValue: newTotalValue,
          }
        }),
      addFruitById: fruitId =>
        set(state => {
          const addedFruit = state.fruits.find(fruit => fruit.id === fruitId)
          const addedFruitValue = addedFruit?.value ?? 0

          const newTotalQuantity = state.totalQuantity + 1
          const newTotalValue = state.totalValue + addedFruitValue

          return {
            fruits: state.fruits.map(fruit =>
              fruit.id === fruitId
                ? { ...fruit, quantity: fruit.quantity + 1 }
                : fruit,
            ),
            filteredFruits: state.filteredFruits.map(fruit =>
              fruit.id === fruitId
                ? { ...fruit, quantity: fruit.quantity + 1 }
                : fruit,
            ),
            totalQuantity: newTotalQuantity,
            totalValue: newTotalValue,
          }
        }),
      setSearchTerm: term =>
        set(state => {
          const lowerCaseSearchTerm = term.toLowerCase()
          const newFilteredFruits = state.fruits.filter(fruit =>
            fruit.title.toLowerCase().includes(lowerCaseSearchTerm),
          )

          return { filteredFruits: newFilteredFruits }
        }),
      clearFruitsData: () => {
        set({ fruits: [] })
        localStorage.removeItem(storageName)
      },
    }),
    {
      name: storageName,
      getStorage: () => localStorage,
    },
  ),
)

export default useFruitStore
