import './Home.scss'

import useToggle from '../../hooks/toggle'
import { Route, Routes } from 'react-router-dom'

import Menu from '../../layout/Menu/Menu'

import { Default as DefaultTopBar } from "../../components/TopBar/TopBar"
import { HomePaths } from '../../constants/Paths'
import NavBar from '../../layout/NavBar/NavBar'

/**
 * Home page
 * @returns {React.JSX.Element}
 */
function Home() {
  const { toggle, activeToggle } = useToggle()

  return (
    <main id="home">
      <DefaultTopBar openMenu={activeToggle} />
      {toggle && <Menu closeMenu={activeToggle}/>}

      <NavBar links={HomePaths}/>
      
      <Routes>
        {HomePaths.map(item => <Route
          key={`${item.name}-key`}
          path={item.path}
          element={item.element} />
        )}
      </Routes>
    </main>
  )
}
export default Home