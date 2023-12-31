import { Formik, Form, Field } from 'formik'

import Logo from '~/assets/logo/logo.png'
import {
  ButtonCustom,
  Content,
  Collumn,
  ContentImg,
  ErrorMessageCustom,
  InputCustom,
  ImageLogo,
  Label,
  Section,
} from './styles'

interface IFormLogin {
  onSubmit: (values?: object) => void
  validationSchema: object
}

const FormLogin = ({ onSubmit, validationSchema }: IFormLogin): JSX.Element => {
  const initialValues = {
    email: '',
    password: '',
  }
  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}
      >
        <Form>
          <Content>
            <ContentImg>
              <ImageLogo alt="FrutaFeira" src={Logo} />
            </ContentImg>
            <Collumn>
              <Label data-testid="email-label">Email</Label>
              <Field
                data-testId="email-input"
                as={InputCustom}
                name="email"
                placeholder="Insira o seu email"
                type="text"
              />
              <ErrorMessageCustom component="div" name="email" />
            </Collumn>
            <Collumn>
              <Label data-testid="senha-label">Senha</Label>
              <Field
                data-testId="senha-input"
                as={InputCustom}
                name="password"
                placeholder="******"
                type="password"
              />
              <ErrorMessageCustom component="div" name="password" />
            </Collumn>
            <ButtonCustom
              data-testid="submit-button"
              aria-label="submit-button"
              type="submit"
            >
              Entrar
            </ButtonCustom>
          </Content>
        </Form>
      </Formik>
    </Section>
  )
}

export default FormLogin
