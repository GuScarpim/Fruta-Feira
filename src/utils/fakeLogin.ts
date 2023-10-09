export const fakeLogin = async (email: string, password: string) => {
  return new Promise<{ token: string; name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email.toLowerCase() === 'gustavo@gmail.com' && password === '123') {
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