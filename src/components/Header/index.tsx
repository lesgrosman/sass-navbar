import { useState, useEffect } from 'react'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useWindowSize } from '../../utils/hooks/useWindowSize'

const Header = () => {
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (width > 768 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen, width])

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>navbar</h2>
        <nav className={`${classes.header__content__nav} ${isMenuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <a href="/">HomePage</a>
            </li>
            <li>
              <a href="/page-one">PageOne</a>
            </li>
            <li>
              <a href="/page-two">PageTwo</a>
            </li>
            <li>
              <a href="/page-three">PageThree</a>
            </li>
            
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {isMenuOpen ? 
            <AiOutlineClose onClick={() => setIsMenuOpen(false)}/> 
            : <BiMenuAltRight onClick={() => setIsMenuOpen(true)}/>}
        </div>
      </div>
    </header>
  )
}

export default Header
