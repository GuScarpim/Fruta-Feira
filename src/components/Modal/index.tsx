/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable new-cap */
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import FruitsItems from '../FruitsItems'
import ButtonGroup from '../ButtonGroup'
import { numberFormat } from '~/utils/formatNumbers'
import useFruitStore from '~/store/fruit'
import { BsFillCartXFill } from 'react-icons/bs'
import { useFruits } from '~/hooks/useFruits'

import {
  Title,
  TitleTotal,
  TitleNotItem,
  Content,
  ContentFruits,
  Value,
  Button,
} from './styles'

interface IModal {
  openModal: boolean
  onClose: () => void
  title: string
}

const ComponentModal: React.FC<IModal> = ({ openModal, onClose, title }: IModal) => {
  const { fruits, totalQuantity, totalValue } = useFruitStore()
  const { generatePDF } = useFruits()

  return (
    <Modal open={openModal} onClose={onClose}>
      <Title>{title}</Title>
      <Content>
        {fruits.map((fruit) => {
          const unitValue = fruit.quantity * fruit.value
          return (
            <div
              key={fruit.id}
              style={{ display: `${fruit.quantity === 0 ? 'none' : ''}` }}
            >
              {fruit.quantity > 0 && (
                <ContentFruits>
                  <FruitsItems
                    src={fruit.src}
                    title={fruit.title}
                    value={fruit.value}
                  />
                  <ButtonGroup fruitId={fruit.id} quantity={fruit.quantity} />
                  <Value>R$ {numberFormat(String(unitValue))}</Value>
                </ContentFruits>
              )}
            </div>
          )
        })}
        {totalQuantity === 0
          ? (
            <TitleNotItem>
              Nenhum item foi adicionado ao carrinho
              <BsFillCartXFill />
            </TitleNotItem>
            )
          : (
            <>
              <TitleTotal>
                Valor total: R$ {numberFormat(String(totalValue))}
              </TitleTotal>
              <Button onClick={generatePDF}>Checkout</Button>
            </>
            )}
      </Content>
    </Modal>
  )
}

export default ComponentModal
