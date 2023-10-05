import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 280px;
  width: 100%;
  padding: 0 20px 0 20px;
  max-width: 1280px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  }
`

export const ArticleLocalization = styled.article`
  h1 {
    font-size: ${({ theme }) => theme.font.size.mega};
    margin-bottom: 20px;

    &:after {
      width: 70px;
    }
  }

  display: flex;
  flex-direction: column;

  h1 {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      border: 2px solid ${({ theme }) => theme.colors.white};
      bottom: -10px;
      left: 0;
      width: 80px;
    }
  }

  p {
    margin: 10px 10px 10px 0;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

export const SectionContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;

    border: none;
    border-radius: 5px;
    text-transform: uppercase;

    height: 40px;
    width: 200px;

    font-size: ${({ theme }) => theme.font.size.small};
    padding: 0 10px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    margin-left: 0;
  }
`

export const SectionSponsor = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin: 0 0 30px;
    width: 100%;
  }

  img {
    width: 60px;
    object-fit: contain;
  }
`
