import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Packages from "./components/Packages"
import Savings from "./components/Savings"
import WhatsAppButton from "./components/WhatsAppButton"
import WhyUs from "./components/WhyUs"
import Hero from "./Sliders/Hero"


function App() {

  return (
    <>
      <div className="font-sans antialiased text-gray-900" dir="rtl">
        <Navbar />
        <main>

          <Hero />


          <WhyUs />

          <Packages />
          <Savings />
        </main>
        <Footer />

        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
