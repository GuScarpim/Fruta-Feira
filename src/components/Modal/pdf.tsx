/* eslint-disable react/jsx-no-useless-fragment */
import FruitsItems from '../FruitsItems'
import { numberFormat } from '~/utils/formatNumbers'
import useFruitStore from '~/store/fruit'

import {
  TitleTotal,
  TitleNotItem,
  Content,
  ContentFruits,
  Value,
  Button,
} from './styles'

const Pdf = () => {
  const { fruits, totalValue } = useFruitStore()

  const generatePDF = () => {}

  return (
    <Content>
      {fruits.map((fruit) => {
        const unitValue = fruit.quantity * fruit.value
        return (
          <div key={fruit.id}>
            {fruit.quantity > 0 && (
              <ContentFruits>
                <FruitsItems
                  src={fruit.src}
                  title={fruit.title}
                  value={fruit.value}
                />
                <TitleNotItem>{fruit.quantity}</TitleNotItem>
                <Value>R$ {numberFormat(String(unitValue))}</Value>
              </ContentFruits>
            )}
          </div>
        )
      })}
      <TitleTotal>
        Valor total: R$ {numberFormat(String(totalValue))}
      </TitleTotal>
      <Button onClick={generatePDF}>Checkout</Button>
    </Content>
  )
}

export default Pdf
