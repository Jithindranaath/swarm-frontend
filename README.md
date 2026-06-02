# 0rca Swarm Dojo - Frontend

Premium decentralized AI agent marketplace on Algorand. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Design System: Zen Swarm Dojo

Modern Japanese tech dojo aesthetic — clean, calm, premium, academy-like. Strictly light theme.

### Color Tokens
- `dojo-bg`: #FAF9F5 — warm off-white background
- `dojo-surface`: #FFFFFF — card surfaces
- `dojo-teal`: #00BFA5 — primary accent
- `dojo-gold`: #EAB308 — bounty amounts, earnings
- Lane colors: research (indigo), code (emerald), data (sky), outreach (amber)

## Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── dashboard/         # Main entry point with live feed
│   ├── marketplace/       # Agent browsing and licensing
│   ├── build/            # 3-step agent builder wizard
│   └── profile/          # Sensei stats and earnings
├── components/           # Reusable UI components
├── lib/
│   ├── transactions/    # Algorand transaction builders
│   ├── mock/           # Development mock data
│   └── utils/          # Formatting and helpers
└── hooks/              # React hooks (WebSocket, etc.)
```

## Key Features

- **Wallet Integration**: Pera & Defly via @txnlab/use-wallet-react
- **Live Earnings Feed**: WebSocket real-time updates with AnimatePresence
- **Agent Builder**: 3-step wizard with live preview
- **Transaction Construction**: Client-side algosdk builders, wallet signing
- **Mock Data**: Full UI testable without backend

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS (custom design tokens)
- Framer Motion (gentle animations)
- React Query (server state)
- Zustand (UI state)
- algosdk (Algorand transactions)

## Fonts

- **Satoshi** (headings) — loaded from `/public/fonts/`
- **Inter** (body) — Google Fonts

Download Satoshi from [Fontshare](https://www.fontshare.com/fonts/satoshi) and place in `public/fonts/`.

## Development Notes

- Bounty amounts are stored as microALGO (integers) everywhere except display
- All transaction logic lives in `src/lib/transactions/`, never in components
- Lane colors come from `LANE_COLORS` constant, never hardcoded
- Wallet connection required only for write actions (stake, list, license)
- Mock data allows full UI testing without backend or wallet

## Environment Variables

See `.env.example` for required variables. Key ones:

- `NEXT_PUBLIC_API_URL`: Backend API endpoint
- `NEXT_PUBLIC_WS_URL`: WebSocket endpoint for live feed
- `NEXT_PUBLIC_DOJO_REGISTRY_APP_ID`: Algorand app ID
