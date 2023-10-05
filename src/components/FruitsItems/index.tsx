/* eslint-disable react/require-default-props */
import { Container, Box, Title, Price } from './styles'
import { numberFormat } from '~/utils/formatNumbers'

interface IFruitsItems {
  src: string
  title: string
  value: number
}

const FruitsItems = ({ src, title, value }: IFruitsItems) => {
  return (
    <Container>
      <img alt={title} src={src} />
      <Box>
        <Title>{title}</Title>
        <Price>Preço: R$ {numberFormat(String(value))}</Price>
      </Box>
    </Container>
  )
}

export default FruitsItems
