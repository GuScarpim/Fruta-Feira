import styled, { css } from 'styled-components'

import fruitsBackground from '~/assets/fruits/fruitsBackground.png'

const background = css`
  background-image: ${() => `url(${fruitsBackground})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left;
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section = styled.section`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`

export const ArticleBackground = styled.article`
  ${background};

  @media screen and (max-width: 980px) {
    padding: 0;
    flex: 0;
    background: none;
  }
`

export const ArticleForm = styled.article`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px) {
    ${background};
    padding: 10px;
  }
`

export const Content = styled.div`
  background-color: #00000099;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 980px) {
    top: 30px;
    position: absolute;
  }

  @media screen and (max-height: 800px) {
    display: none;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.extra_gigantic};

  @media screen and (max-width: 980px) {
    font-size: ${({ theme }) => theme.font.size.gigantic};
  }
`

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.ultra_large};

  @media screen and (max-width: 1180px) {
    font-size: ${({ theme }) => theme.font.size.large};
  }
`
