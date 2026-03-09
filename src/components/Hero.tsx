export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center section-padding pt-24 bg-hero-fire"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20c0-4 4-8 8-8s8 4 8 8c0 6-4 12-8 16-4-4-8-10-8-16zm0 40c-8 0-16-4-24-8 4-8 12-12 20-12s16 4 20 12c-8 4-16 8-24 8z' fill='%23dc2626' fill-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-chili/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center container-narrow">
        <p className="font-display text-chili text-sm sm:text-base tracking-[0.2em] uppercase mb-4 font-semibold">
          🌶 Kyoto × Egypt
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-kyoto-brown mb-6 leading-tight drop-shadow-sm">
          京の辛さ、
          <br />
          <span className="italic bg-gradient-to-r from-chili via-chili-dark to-amber-700 bg-clip-text text-transparent drop-shadow-sm">
            エジプトの魂。
          </span>
        </h1>
        <p className="text-kyoto-brown/90 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-medium">
          京都の唐辛子とエジプトの食文化がひとつになった、
          <br className="hidden sm:block" />
          <span className="text-chili-dark font-semibold">ホットスパイシーソース。</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-btn-hot text-white font-bold shadow-chili hover:shadow-chili-lg hover:scale-105 transition-all duration-200"
          >
            商品を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-chili text-chili-dark font-bold hover:bg-chili hover:text-white transition-all duration-200"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 sm:mt-16 w-full max-w-sm mx-auto">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-chili-lg border-4 border-chili/40 bg-spice-200/80 ring-2 ring-chili/20">
          <img
            src="/images/jigokudani.jpg"
            alt="ホットスパイシーソースの瓶"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
