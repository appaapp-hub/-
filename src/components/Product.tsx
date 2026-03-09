const features = [
  {
    title: '京都の唐辛子',
    description: '京の風土で育った唐辛子を使用。辛さと旨みのバランスが特徴です。',
    icon: '🌶️',
  },
  {
    title: 'エジプトのスパイス',
    description: 'クミン、コリアンダーなど、エジプトの食文化に欠かせないスパイスをブレンド。',
    icon: '🧂',
  },
  {
    title: '3ヶ月発酵',
    description: '時間をかけて熟成。角のない辛味と、奥行きのある香りを目指しました。',
    icon: '⏳',
  },
  {
    title: '使いやすい辛さ',
    description: 'ガツンと効く辛さではなく、料理を引き立てる中辛〜やや辛。毎日使えます。',
    icon: '🔥',
  },
  {
    title: '幅広い料理に',
    description: '肉料理、魚、野菜、パスタ、サンドイッチ、卵料理など、なんでも合います。',
    icon: '🍽️',
  },
]

export default function Product() {
  return (
    <section id="product" className="section-padding bg-spice-50">
      <div className="container-wide">
        <p className="font-display text-chili font-semibold text-sm tracking-[0.2em] uppercase mb-2">🌶 Product</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-kyoto-brown mb-4">
          商品の特徴
        </h2>
        <p className="text-kyoto-brown/80 max-w-2xl mb-14">
          京都の唐辛子とエジプトの食文化を掛け合わせた、<span className="font-semibold text-chili-dark">ホットスパイシーソース</span>。材料と製法にこだわり、普段の食卓でも気軽に使える味に仕上げています。
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-md border-2 border-spice-200/60 hover:border-chili/50 hover:shadow-chili transition-all"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-3xl mb-4 block" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="font-display font-bold text-kyoto-brown text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-kyoto-brown/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl bg-white border-2 border-chili/20 shadow-md p-6 sm:p-8">
          <h3 className="font-display font-bold text-xl text-kyoto-brown mb-4 flex items-center gap-2">
            <span className="text-chili-light" aria-hidden>🧾</span> 原材料
          </h3>
          <p className="text-kyoto-brown/80 leading-relaxed">
            黒糖酢、砂糖、塩、水（<span className="font-semibold text-chili-dark">3ヶ月発酵</span>）
          </p>
          <p className="mt-3 text-sm text-kyoto-brown/60">
            ※ 表示内容は試作・改良により変更になる場合があります。
          </p>
        </div>

        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-kyoto-brown to-chili-dark text-spice-100 border-2 border-chili/30 shadow-chili">
          <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-chili-light">🔥</span> おすすめの使い方
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> 焼き肉・グリルにそのまま
            </li>
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> パスタの仕上げにひとまわし
            </li>
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> サンドイッチ・バーガーに
            </li>
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> 卵料理・オムレツに
            </li>
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> ドレッシングのアクセントに
            </li>
            <li className="flex items-center gap-2">
              <span className="text-kyoto-gold font-bold">•</span> スープの隠し味に
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
