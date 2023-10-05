import { useState } from 'react'

import { PiMagnifyingGlass } from 'react-icons/pi'
import { FaShoppingCart } from 'react-icons/fa'

import Logo from '~/assets/logo/logo.png'

import Burger from '../burger'
import Modal from '~/components/Modal'
import User from '~/components/User'

import {
  ContentNavbar,
  ContentInput,
  Nav,
  RightLogo,
  Notification,
} from './styles'
import { useFruits } from '~/hooks/useFruits'

const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { handleChange, totalQuantity } = useFruits()

  return (
    <div>
      <Modal
        openModal={openModal}
        title='Fazer checkout'
        onClose={() => setOpenModal(false)}
      />
      <Nav>
        <div>
          <ContentNavbar>
            <RightLogo alt='FrutaFeira' src={Logo} />

            <ContentInput>
              <input
                placeholder='O que está procurando?'
                type='text'
                onChange={handleChange}
              />
              <PiMagnifyingGlass />
            </ContentInput>

            <User />

            <Notification onClick={() => setOpenModal(true)}>
              <FaShoppingCart />
              <span>{totalQuantity}</span>
            </Notification>
          </ContentNavbar>
        </div>
      </Nav>
      <Burger />
    </div>
  )
}

export default Navbar
