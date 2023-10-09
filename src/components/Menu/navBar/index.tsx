import { useState } from 'react'

import { PiMagnifyingGlass } from 'react-icons/pi'
import { FaShoppingCart } from 'react-icons/fa'

import Logo from '~/assets/logo/logo.png'

import Burger from '../burger'
import Modal from '~/components/Modal'
import User from '~/components/Dropdown'

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
        title="Fazer checkout"
        onClose={() => setOpenModal(false)}
      />
      <Nav>
        <div>
          <ContentNavbar>
            <RightLogo alt="FrutaFeira" src={Logo} />

            <ContentInput>
              <input
                placeholder="O que está procurando?"
                type="text"
                data-testId="search-icon"
                onChange={handleChange}
              />
              <PiMagnifyingGlass />
            </ContentInput>

            <User data-testId="user-component" />

            <Notification onClick={() => setOpenModal(true)}>
              <FaShoppingCart data-testId="cart-icon" />
              <span data-testId="cart-quantity">{totalQuantity}</span>
            </Notification>
          </ContentNavbar>
        </div>
      </Nav>
      <Burger />
    </div>
  )
}

export default Navbar
