import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Product from './components/Product'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import SectionFade from './components/SectionFade'

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-chili focus:text-white focus:rounded-lg"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SectionFade><Story /></SectionFade>
        <SectionFade><Product /></SectionFade>
        <SectionFade><Gallery /></SectionFade>
        <SectionFade><Contact /></SectionFade>
      </main>
      <footer className="bg-gradient-to-b from-kyoto-brown to-chili-dark text-spice-100 py-8 text-center text-sm border-t-2 border-chili/30">
        <p className="font-semibold">© 2025 京都唐辛子 エジプトピクルス風ソース</p>
      </footer>
    </div>
  )
}

export default App
