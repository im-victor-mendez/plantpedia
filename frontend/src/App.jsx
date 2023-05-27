import './App.scss'
import { Route, Routes } from "react-router-dom";
import Paths from "./constants/Paths";
import { useEffect } from 'react';
import { removeDomLoader } from './functions/initApp';

function App() {
  useEffect(() => {
    removeDomLoader()
  }, [])
  
  return (
    <main id="App">
      <Routes>
        {Paths.map(item => {
          const { name, path, element } = item
          return <Route key={`${name}-key`} path={path} element={element} />
        })}
      </Routes>
    </main>
  )
}

export default App
