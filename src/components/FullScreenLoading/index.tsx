import { LoadingContainer, Spinner } from './styles'

const FullScreenLoading = () => {
  return (
    <LoadingContainer data-testId="loading-container">
      <Spinner data-testId="spinner"/>
    </LoadingContainer>
  )
}

export default FullScreenLoading
