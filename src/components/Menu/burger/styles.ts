import styled from 'styled-components'

interface INav {
  open: boolean
  href?: string
}

export const StyledBurger = styled.div<INav>`
  width: 32px;
  height: 32px;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 3;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 32px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
