import { useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { enumRoutes } from '~/utils/routesEnum'
import user, { UserState, UserActions } from '~/store/user'

interface IValues {
  email: string
  password: string
}

const fakeLogin = async (email: string, password: string) => {
  return new Promise<{ token: string; name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'gustavo@gmail.com' && password === '123') {
        resolve({
          token: 'fakeToken123',
          name: 'Gustavo',
        })
      } else {
        reject(new Error('Credenciais inválidas'))
      }
    }, 1000)
  })
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
