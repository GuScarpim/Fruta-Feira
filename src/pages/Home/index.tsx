import { Section, Content, ContentTitle, Title } from './styles'

import Cards from '~/components/Cards'
import FullScreenLoading from '~/components/FullScreenLoading'
import ToastContainer from '~/components/ToastContainer'
import { useFruits } from '~/hooks/useFruits'
import Container from '~/layout/container'

const Login = (): JSX.Element => {
  const { isLoading, filteredFruits } = useFruits()

  return (
    <Container>
      <ToastContainer />
      {isLoading && <FullScreenLoading />}
      <ContentTitle>
        <Title>Frutas</Title>
      </ContentTitle>
      <Section>
        {filteredFruits.map((fruit) => (
          <Content key={fruit.id}>
            <Cards
              description={fruit.description}
              fruitId={fruit.id}
              quantity={fruit.quantity}
              src={fruit.src}
              title={fruit.title}
              value={fruit.value}
            />
          </Content>
        ))}
      </Section>
    </Container>
  )
}

export default Login
