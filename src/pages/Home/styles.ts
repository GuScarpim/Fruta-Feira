import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  max-width: 1100px;
  gap: 30px;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
`

export const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 30px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.ultra_large};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`
