import Head from 'next/head'
import FAQs from '../components/FAQs'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import PortfolioSection from '../components/PortfolioSection'
import ProcessSection from '../components/ProcessSection'
import ServiceSection from '../components/ServicesSection'
import TrustedSection from '../components/TrustedSection'
import GetStartedSection from '../components/GetStartedSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebsiteWala - We help you take your business online.</title>
        <meta name="description" content="WebsiteWala - We help you take your business online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
      <TrustedSection />
      <ServiceSection />
      <ProcessSection />
      <PortfolioSection />
      <FAQs />
      <GetStartedSection />
      <Footer />
      <BackToTop />
    </div>
  )
}
