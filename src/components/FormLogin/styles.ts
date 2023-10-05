import styled from 'styled-components'
import { ErrorMessage } from 'formik'

export const Section = styled.section`
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 400px;

  @media screen and (max-width: 980px) {
    width: auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    opacity: 0.95;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const ErrorMessageCustom = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.danger};
  margin: 5px 0 10px;
`

export const ImageLogo = styled.img`
  width: 80px;
  object-fit: contain;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: start;
`

export const InputCustom = styled.input`
  width: -webkit-fill-available;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font.size.regular};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  height: 40px;
  margin-top: 10px;
  padding: 0 0 0 10px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const ButtonCustom = styled.button`
  width: 400px;
  border-radius: 4px;
  height: 40px;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.medium};
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease-out;
    filter: brightness(0.9);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
