import styled from 'styled-components'

export const Section = styled.div`
  min-height: calc(100vh - 380px);
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};

  @media screen and (max-width: 800px) {
    padding: 40px 20px 0;
  }
`
