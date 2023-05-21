import './App.scss'
import { Route, Routes } from "react-router-dom";
import Paths from "./constants/Paths";

function App() {
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
