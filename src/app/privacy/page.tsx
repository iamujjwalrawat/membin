export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen p-6 sm:p-12 max-w-3xl mx-auto w-full text-white/80 space-y-8 pb-32">
      <header>
        <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-[#00FFD1] font-medium">Last Updated: October 2026</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
        <p>Membin collects information to provide better services to all our users. This includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Information you create or provide to us (Account Data, Pulse Posts, Media).</li>
          <li>Information we collect as you use our services (Connections, Activity, Audio processing data via OpenAI capabilities).</li>
          <li>Music preference logs fetched securely through Spotify integrations.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Two-Factor Authentication (2FA) & Security</h2>
        <p>
          State-of-the-art encryption guards your data. We highly recommend activating our OTP-powered 
          Two-Factor Authentication protocol internally available via the security dashboard to ensure 
          unprecedented account lockdown. 
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Third Party Integrations</h2>
        <p>
          When you link Facebook, Google, LinkedIn, or Instagram, your data resides entirely beneath your 
          sovereign control. Membin acts merely as a gateway API without hoarding unnecessary 
          personally identifiable traits outside strict scopes defined by OAuth guidelines.
        </p>
      </section>
    </main>
  );
}
