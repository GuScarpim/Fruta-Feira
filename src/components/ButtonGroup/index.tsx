import useFruitStore from '../../store/fruit'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { Container, CircleButton, Values } from './styles'

interface IButtonGroup {
  fruitId: number
  quantity: number
}

const ButtonGroup = ({ fruitId, quantity }: IButtonGroup) => {
  const { removeFruitById, addFruitById } = useFruitStore()

  return (
    <Container>
      <CircleButton
        onClick={() => removeFruitById(fruitId)}
        data-testId="buttonGroup-minus-button"
      >
        <AiOutlineMinus />
      </CircleButton>
      <Values data-testId="buttonGroup-values">{quantity || 0}</Values>
      <CircleButton
        onClick={() => addFruitById(fruitId)}
        data-testId="buttonGroup-plus-button"
      >
        <AiOutlinePlus />
      </CircleButton>
    </Container>
  )
}

export default ButtonGroup
