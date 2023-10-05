import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border: none;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    filter: brightness(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Values = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.super_small};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`
