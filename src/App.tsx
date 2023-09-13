import { Route, Routes, HashRouter } from "react-router-dom"
import { TaskPage } from "./pages"
import './App.css'

function App() {

  // В приложение заложена возможность роутинга и масштабируемость

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
