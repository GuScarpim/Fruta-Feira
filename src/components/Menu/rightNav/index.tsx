import { Ul, RightLogo } from './styles'

import User from '~/components/User'
import Logo from '~/assets/logo/logo.png'

interface IRightNav {
  open: boolean
}

const RightNav = ({ open }: IRightNav) => {
  return (
    <Ul open={open}>
      <div>
        <RightLogo alt='FrutaFeira' src={Logo} />
        <User />
      </div>
    </Ul>
  )
}

export default RightNav
