import { useState, useEffect } from 'react'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [size, setSize] = useState<{ windowWidth?: number }>({
    windowWidth: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({windowWidth: window.innerWidth})
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if ( size.windowWidth && size.windowWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen, size.windowWidth])



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
