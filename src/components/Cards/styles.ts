import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 210px;
  height: 100%;
  padding: 10px 18px 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Description = styled.p`
  margin-top: 8px;
  line-height: 16px;
  min-height: 100px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.super_small};
  font-weight: ${({ theme }) => theme.font.weight.light};
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 5px;
`
