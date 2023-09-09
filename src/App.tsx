import { Route, Routes, HashRouter } from "react-router-dom"
import './App.css'
import { TaskPages } from "./pages/TaskPages/TaskPages"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<TaskPages />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
