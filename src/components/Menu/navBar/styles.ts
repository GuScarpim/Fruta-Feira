import styled from 'styled-components'

export const ContentNavbar = styled.section`
  max-width: 1700px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }
  }
`

export const ContentInput = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 20px;

  input {
    font-size: ${({ theme }) => theme.font.size.large};
    outline: none;
    width: 40vw;
    border: none;
    padding: 0 20px 5px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  }

  svg {
    position: relative;
    left: -45px;
    bottom: 5px;
    color: ${({ theme }) => theme.colors.black};
    z-index: 2;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 20px;
    gap: 0px;
    width: 90%;

    svg {
      left: -25px;
    }

    input {
      width: 100%;
      right: 0;
      font-size: ${({ theme }) => theme.font.size.regular};
    }
  }
`

export const RightLogo = styled.img`
  width: 30px;
  object-fit: contain;
  margin-right: 60px;

  @media (max-width: 768px) {
    height: 80px;
  }
`

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
    height: 80px;
    width: 100%;
    align-items: baseline;
  }
`

export const Notification = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  display: relative;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    position: absolute;
    right: 40px;
    top: 5px;
  }

  span {
    width: 25px;
    height: 25px;
    font-size: ${({ theme }) => theme.font.size.small};
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 18px;
  }

  svg {
    color: ${({ theme }) => theme.colors.black};
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
`
