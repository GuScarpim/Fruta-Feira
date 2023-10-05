import styled, { css } from 'styled-components'
import { ButtonCustom } from '../FormLogin/styles'

const styleTitle = css`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.large};
`

export const Title = styled.h1`
  ${styleTitle};
  margin-bottom: 40px;
`

export const TitleTotal = styled.h1`
  ${styleTitle};
  margin-top: 20px;
`

export const TitleNotItem = styled.h1`
  ${styleTitle};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  svg {
    width: 30px;
    height: 30px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`

export const ContentFruits = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.medium};
`

export const Button = styled(ButtonCustom)`
  width: 100%;
`
