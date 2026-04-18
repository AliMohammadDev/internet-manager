import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import WhatsAppButton from "./components/WhatsAppButton"


function App() {

  return (
    <>
      <div className="font-sans antialiased text-gray-900" dir="rtl">
        <Navbar />

        <main className="min-h-[70vh]">
          <Outlet />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
