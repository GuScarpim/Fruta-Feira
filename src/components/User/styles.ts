import styled from 'styled-components'

export const ContentUser = styled.article`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.black};
    z-index: 2;
    width: 25px;
    height: 25px;
  }

  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.large};
  }

  @media (max-width: 768px) {
    display: none;

    span {
      color: ${({ theme }) => theme.colors.white};
      margin: 15px 0 15px 10px;
    }

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

  }
`

export const DropdownMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 100px;
  height: 20px;
  border-radius: 6px;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.large};

    margin: 0;
    padding: 8px;
    cursor: pointer;
  }
`
