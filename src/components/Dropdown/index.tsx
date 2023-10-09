import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { enumRoutes } from '~/utils/routesEnum'
import user from '~/store/user'
import { PiUserBold } from 'react-icons/pi'

import { ContentUser, DropdownMenu } from './styles'
import useFruitStore from '~/store/fruit'

const Dropdown: React.FC = () => {
  const navigate = useNavigate()
  const { clearFruitsData } = useFruitStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const data = user((state) => state.user)
  const menuRef = useRef<HTMLDivElement>(null)

  const logout = () => {
    user.getState().clearUserData()
    clearFruitsData()
    navigate(enumRoutes.login)
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <ContentUser onClick={() => handleToggleMenu()}>
      <PiUserBold />
      <span data-testId="user-name">{data?.name}</span>
      {isMenuOpen && (
        <DropdownMenu
          data-testId="dropdown-menu"
          ref={menuRef}
          onClick={() => logout()}
        >
          <p>Sair</p>
        </DropdownMenu>
      )}
    </ContentUser>
  )
}

export default Dropdown
