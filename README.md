# EverGrace Senior Care — Next.js Website

Bilingual (English/Chinese) senior care service website for Irvine, Orange County.

## Pages
- `/` — Homepage
- `/services` — All 8 services with detail
- `/membership` — Silver / Gold / Platinum tiers + Points system + FAQ
- `/about` — Story, values, team, community
- `/contact` — Contact form, phone, WeChat, service areas map

## Stack
- **Framework**: Next.js 14 (App Router)
- **Hosting**: Vercel (free)
- **Version control**: GitHub (free)
- **Fonts**: Lora + Noto Serif SC + DM Sans (Google Fonts)

---

## Deploy in 5 minutes (free)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Run locally
```bash
npm run dev
# Open http://localhost:3000
```

### Step 3 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial EverGrace site"
git remote add origin https://github.com/YOUR_USERNAME/evergrace.git
git push -u origin main
```

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. Click Deploy — done ✅

Your site will be live at `evergrace.vercel.app` in ~60 seconds.
Every future `git push` auto-deploys.

---

## Add a custom domain (optional, ~$12/yr)
1. Buy domain at Namecheap or Google Domains (e.g. `evergracecare.com`)
2. In Vercel dashboard → Settings → Domains → Add domain
3. Follow DNS instructions

---

## Next development steps
When you hire IT staff, they will extend this codebase to add:
- Supabase auth (user accounts / login)
- Booking/scheduling system
- Membership management + Stripe billing
- Admin dashboard
- WeChat integration
- Mobile app (React Native)
