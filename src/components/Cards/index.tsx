import { Card, Description, ContentButton } from './styles'

import FruitsItems from '../FruitsItems'
import ButtonGroup from '../ButtonGroup'

interface ICards {
  fruitId: number
  src: string
  title: string
  value: number
  description: string
  quantity: number
}

const Cards = ({
  src,
  title,
  value,
  description,
  quantity,
  fruitId,
}: ICards) => {
  return (
    <Card>
      <FruitsItems src={src} title={title} value={value} />
      <Description>{description}</Description>
      <ContentButton>
        <ButtonGroup fruitId={fruitId} quantity={quantity} />
      </ContentButton>
    </Card>
  )
}

export default Cards
