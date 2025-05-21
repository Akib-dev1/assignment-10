import { Outlet } from "react-router"
import Navbar from "./Navbar"


function App() {
    return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
