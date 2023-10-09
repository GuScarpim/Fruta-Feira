import { useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { enumRoutes } from '~/utils/routesEnum'
import { fakeLogin } from '~/utils/fakeLogin'
import user, { UserState, UserActions } from '~/store/user'

interface IValues {
  email: string
  password: string
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values: IValues) => {
    try {
      setIsLoading(true)

      const { token, name } = await fakeLogin(values.email, values.password)

      user.setState((state: UserState & UserActions) => ({
        ...state,
        user: { token, name },
      }))
      navigate(enumRoutes.home)
    } catch (error: any) {
      const errorString = `Erro ao fazer login: ${error.message}`
      toast.error(errorString)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    setIsLoading,
    onSubmit,
  }
}
