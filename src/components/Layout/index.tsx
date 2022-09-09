import Header from '../Header'
import classes from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        {children} 
      </div>
    </>
  )
}

export default Layout