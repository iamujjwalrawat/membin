export default function TermsOfService() {
  return (
    <main className="min-h-screen p-6 sm:p-12 max-w-3xl mx-auto w-full text-white/80 space-y-8 pb-32">
      <header>
        <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-[#00FFD1] font-medium">Last Updated: October 2026</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Utilizing Membin</h2>
        <p>
          By creating an account and connecting your networks (LinkedIn, Google, Spotify, Instagram, Facebook), 
          you agree to operate within the professional and creative bounds of our platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Our AI Features</h2>
        <p>
          Our AI Studio integrates Large Language Models. Responses generated using OpenAI, Claude, or Google 
          Gemini are provided &quot;as is.&quot; You are responsible for ensuring AI-facilitated pulses or exhibits
          comply with our community guidelines.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Network Handshakes & Email Services</h2>
        <p>
          When emitting professional handshakes or registering via Email Magic Link, our SMTP backup infrastructure 
          will route strictly essential automated emails. Spamming connections is fiercely strictly prohibited.
        </p>
      </section>
    </main>
  );
}
