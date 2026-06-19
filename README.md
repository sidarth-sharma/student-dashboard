# Student Dashboard

A modern learning dashboard built using:

- Next.js App Router
- JavaScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide Icons

## Features

- Responsive Bento Grid Layout
- Dynamic Course Cards
- Daily Learning Streak
- Activity Contribution Graph
- Animated Progress Bars
- Hover Animations
- Staggered Entry Animations
- Loading Skeletons
- Error Handling

## Architecture

- Server Components fetch course data from Supabase.
- Client Components handle animations using Framer Motion.
- Tailwind CSS is used for styling.

## Setup

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

