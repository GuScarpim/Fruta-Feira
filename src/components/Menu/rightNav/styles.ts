import styled from 'styled-components'

interface INav {
  open: boolean
  href?: string
}

export const RightLogo = styled.img`
  width: 30px;
  object-fit: contain;
  margin-right: 60px;

  @media (max-width: 768px) {
    height: 80px;
  }
`

export const Ul = styled.ul<INav>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;

    position: fixed;
    top: 0;
    left: 50px;
    font-size: ${({ theme }) => theme.font.size.large};
    height: 67px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: ${(props) => props.open ? 'translateX(-20%)' : 'translateX(-130%)'};

    height: 100%;
    width: 250px;

    padding-top: 55px;

    transition: transform 0.3s ease-in-out;

    z-index: 2;

    article {
      display: flex;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250px;

      img {
        margin: 0px;
        padding: 0;
        width: 80px;
      }
    }
  }
`
