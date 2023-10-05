import * as Yup from 'yup'

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
})
