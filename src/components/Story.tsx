export default function Story() {
  return (
    <section id="story" className="section-padding bg-gradient-to-b from-white to-spice-100/80 border-y border-chili/10">
      <div className="container-narrow">
        <p className="font-display text-chili font-semibold text-sm tracking-[0.2em] uppercase mb-2">🌶 Our Story</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-kyoto-brown mb-12">
          京都とエジプトが、<span className="text-chili-dark">ひとつの瓶に。</span>
        </h2>

        <div className="prose prose-lg max-w-none text-kyoto-brown/90">
          <p className="leading-relaxed mb-6">
            エジプトのタメイヤやフールに欠かせない、あの<strong className="text-chili-dark">ピリ辛</strong>のピクルス。その味に憧れて、日本で再現しようとしたとき、選んだのは京都の唐辛子でした。
          </p>
          <p className="leading-relaxed mb-6">
            京の土と水で育った唐辛子は、辛さだけでなく、深い旨みと香りを持っています。それをエジプトのスパイスと丁寧に合わせることで、どこにもない「京の辛さ、エジプトの魂」が生まれました。
          </p>
          <p className="leading-relaxed mb-6">
            ベースには黒糖酢のまろやかさを活かし、<strong className="text-chili-dark">3ヶ月の発酵</strong>で味を整えています。ひと口目は華やか、後味はすっきり。料理に寄り添う辛さを目指しました。
          </p>
          <p className="leading-relaxed">
            普段の料理にひとたらし。焼き肉にも、パスタにも、サンドイッチにも。京都とエジプトの出会いを、ぜひ食卓で。
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-chili/15 text-chili-dark font-semibold text-sm border border-chili/30">
            京都産唐辛子
          </span>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-chili/15 text-chili-dark font-semibold text-sm border border-chili/30">
            エジプトピクルス風
          </span>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-chili/15 text-chili-dark font-semibold text-sm border border-chili/30">
            無添加志向
          </span>
        </div>
      </div>
    </section>
  )
}
