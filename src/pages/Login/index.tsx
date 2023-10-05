import { useLogin } from '~/hooks/useLogin'
import { validationSchemaLogin } from '~/utils/yup'

import LayoutLogin from '~/layout/auth/login'

import FormLogin from '~/components/FormLogin'
import FullScreenLoading from '~/components/FullScreenLoading'
import ToastContainer from '~/components/ToastContainer'

const Login = (): JSX.Element => {
  const { isLoading, onSubmit } = useLogin()

  return (
    <LayoutLogin>
      {isLoading && <FullScreenLoading />}
      <ToastContainer />
      <FormLogin
        validationSchema={validationSchemaLogin}
        onSubmit={onSubmit as (values?: object | undefined) => void}
      />
    </LayoutLogin>
  )
}

export default Login
