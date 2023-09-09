import { Route, Routes, HashRouter } from "react-router-dom"
import { TaskPage } from "./pages"
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<TaskPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
