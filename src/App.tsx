import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { FundOverview } from './sections/FundOverview'
import { InvestmentThesis } from './sections/InvestmentThesis'
import { PortfolioStrategy } from './sections/PortfolioStrategy'
import { Differentiators } from './sections/Differentiators'
import { ESGImpact } from './sections/ESGImpact'
import { Pipeline } from './sections/Pipeline'
import { Leadership } from './sections/Leadership'
import { InvestorProposition } from './sections/InvestorProposition'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FundOverview />
        <InvestmentThesis />
        <PortfolioStrategy />
        <Differentiators />
        <ESGImpact />
        <Pipeline />
        <Leadership />
        <InvestorProposition />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
