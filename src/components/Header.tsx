import { useState } from 'react'

const navItems = [
  { id: 'story', label: 'ストーリー' },
  { id: 'product', label: '商品の特徴' },
  { id: 'gallery', label: 'ギャラリー' },
  { id: 'contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spice-50/98 backdrop-blur-sm border-b-2 border-chili/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-bold text-kyoto-brown text-lg sm:text-xl tracking-tight hover:text-chili transition-colors"
            aria-label="トップへ"
          >
            京の辛さ、エジプトの魂
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative text-sm font-semibold text-kyoto-brown/90 hover:text-chili transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-chili after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-kyoto-brown hover:bg-chili/10 hover:text-chili transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-chili/20 bg-spice-50">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left py-2 px-3 rounded-lg text-kyoto-brown hover:bg-chili/10 hover:text-chili font-semibold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
