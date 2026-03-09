const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
    alt: 'グリル料理にソースをかけた様子',
    caption: 'グリル・焼き肉に',
  },
  {
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80',
    alt: 'パスタにソースを添えた様子',
    caption: 'パスタの仕上げに',
  },
  {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
    alt: 'サンドイッチにソースをかけた様子',
    caption: 'サンドイッチに',
  },
  {
    src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80',
    alt: '卵料理にソースを添えた様子',
    caption: '卵料理に',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-wide">
        <p className="font-display text-chili font-semibold text-sm tracking-[0.2em] uppercase mb-2">🌶 Gallery</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-kyoto-brown mb-4">
          料理との組み合わせ
        </h2>
        <p className="text-kyoto-brown/80 max-w-2xl mb-12">
          普段の食卓から、ちょっとしたごちそうまで。いろんな料理を<span className="text-chili-dark font-semibold">引き立てます。</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <figure key={item.caption} className="group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-spice-100 mb-3 shadow-md border-2 border-transparent group-hover:border-chili/40 group-hover:shadow-chili transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <figcaption className="text-sm font-semibold text-kyoto-brown/90 text-center group-hover:text-chili-dark transition-colors">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
