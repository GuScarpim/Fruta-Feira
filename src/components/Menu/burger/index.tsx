import { useState } from 'react'
import { StyledBurger } from './styles'

import RightNav from '../rightNav'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger
