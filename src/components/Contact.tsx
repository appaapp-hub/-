import { useState, FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Formspree: https://formspree.io でフォームを作成し、FORMSPREE_ENDPOINT を取得したURLに差し替えてください
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-spice-50">
      <div className="container-narrow">
        <p className="font-display text-chili font-semibold text-sm tracking-[0.2em] uppercase mb-2">🌶 Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-kyoto-brown mb-4">
          お問い合わせ
        </h2>
        <p className="text-kyoto-brown/80 mb-10">
          ご購入・取材・仕入れのご相談など、お気軽にどうぞ。
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl space-y-6 bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-chili/20 focus-within:border-chili/50 transition-colors"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-kyoto-brown mb-2">
              お名前 <span className="text-chili">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-spice-200 bg-spice-50/50 text-kyoto-brown placeholder:text-kyoto-brown/50 focus:outline-none focus:ring-2 focus:ring-chili/30 focus:border-chili"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-kyoto-brown mb-2">
              メールアドレス <span className="text-chili">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-spice-200 bg-spice-50/50 text-kyoto-brown placeholder:text-kyoto-brown/50 focus:outline-none focus:ring-2 focus:ring-chili/30 focus:border-chili"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-kyoto-brown mb-2">
              メッセージ <span className="text-chili">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border-2 border-spice-200 bg-spice-50/50 text-kyoto-brown placeholder:text-kyoto-brown/50 focus:outline-none focus:ring-2 focus:ring-chili/30 focus:border-chili resize-y min-h-[120px]"
              placeholder="ご質問やご要望をご記入ください"
            />
          </div>

          {status === 'success' && (
            <p className="text-green-700 text-sm font-medium">
              送信しました。ありがとうございます。
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm font-medium">
              送信に失敗しました。しばらくしてから再度お試しください。
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-btn-hot text-white font-bold shadow-chili hover:shadow-chili-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
          >
            {status === 'sending' ? '送信中…' : '送信する'}
          </button>
        </form>

        <p className="mt-6 text-sm text-kyoto-brown/60">
          ※ お返事までに2〜3日いただく場合がございます。
        </p>
      </div>
    </section>
  )
}
