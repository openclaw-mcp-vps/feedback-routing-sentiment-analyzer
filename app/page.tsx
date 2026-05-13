export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route Customer Feedback<br />
          <span className="text-[#58a6ff]">Based on Sentiment & Urgency</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly analyze incoming feedback, score urgency with AI, and automatically dispatch to the right Slack channel or inbox — before issues escalate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $35/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold text-white mb-1">Sentiment Analysis</h3>
            <p className="text-sm text-[#8b949e]">AI classifies every message as positive, neutral, or negative in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="font-semibold text-white mb-1">Urgency Scoring</h3>
            <p className="text-sm text-[#8b949e]">Priority scores from 1–10 ensure critical issues reach the right person first.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-semibold text-white mb-1">Auto Routing</h3>
            <p className="text-sm text-[#8b949e]">Dispatch to Slack channels or email inboxes based on configurable rules.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] mb-6">/month per workspace</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited feedback ingestion via API/webhook</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI sentiment + urgency scoring</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack & email routing rules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Trends dashboard & team metrics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 7-day free trial</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does feedback get into the system?</h3>
            <p className="text-sm text-[#8b949e]">Send feedback via our REST API or configure a webhook from your existing tools (Intercom, Zendesk, Typeform, etc.). It's analyzed instantly on arrival.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which channels can I route to?</h3>
            <p className="text-sm text-[#8b949e]">Currently Slack (any channel) and email. You define routing rules per sentiment level and urgency score — fully configurable from the dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FeedbackRoute. All rights reserved.
      </footer>
    </main>
  )
}
