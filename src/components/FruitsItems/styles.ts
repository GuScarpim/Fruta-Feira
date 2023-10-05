import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 100%;
  }
`

export const Box = styled.p`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.regular};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`
