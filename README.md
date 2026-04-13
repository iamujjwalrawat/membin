# Membin: The Hybrid Social Platform

Membin is a next-generation social network merging the text pulse of X, the professional networking of LinkedIn, the aesthetic media of VSCO/Instagram, and the audio experience of Spotify and Voice notes.

## Deployment Instructions (Netlify)

This project uses Next.js 15 App Router and is configured to run on Netlify with Edge functions and optimized caching (`netlify.toml` included).

### 🛠️ Manual Configuration Checklist (Post-Run)

Once you deploy to Netlify, plug in the following Environment Variables into your Netlify configuration:

| Variable | Source | Purpose |
| :--- | :--- | :--- |
| `DATABASE_URL` | Supabase / Neon | To store your Pulse posts and Handshakes. |
| `OPENAI_API_KEY` | OpenAI | To power the Whisper voice-to-text comments. |
| `SPOTIFY_CLIENT_ID` | Spotify Dev Portal | To pull live music data into stories via `SpotifyBridge`. |
| `SPOTIFY_CLIENT_SECRET`| Spotify Dev Portal | NextAuth Spotify Provider Secret. |
| `LINKEDIN_CLIENT_ID` | LinkedIn Auth | Professional networking identity. |
| `LINKEDIN_CLIENT_SECRET`| LinkedIn Auth | NextAuth LinkedIn Provider Secret. |
| `EMAIL_SERVER` | SMTP Provider | Magic link authentication server. |
| `EMAIL_FROM` | SMTP Provider | Magic link sender address. |
| `NEXTAUTH_URL` | https://membin.netlify.app | To verify your live login requests. |
| `NEXTAUTH_SECRET` | Generate random string | Secure session tokens. |

### 🎨 Design Features
- **Liquid Glassmorphism**: Stunning blurs, subtle borders (`bg-[rgba(255,255,255,0.05)]`).
- **VSCO-Grain Overlay**: Tactile, film-like noise layer via a static SVG filter layered globally over the application (`globals.css`).
- **Live Theming**: Extracted dominant colors from album art automatically tint the vibe of the application background.
- **Framer Motion Layouts**: Pages animate in with layout IDs seamlessly sliding and fading.
- **Custom Cursor**: A glowing Neon Mint cursor that expands when interacting with key elements like the "Handshake" button.

### Local Development
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

*Built by Ujjwal Rawat.*
