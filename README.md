This is a proof-of-concept [Next.js](https://nextjs.org) for [Better Auth](https://www.better-auth.com/), using vanilla Javascript.

## Getting Started

First install dependencies:

```bash
npm install
```

Run the database migration for database:

```bash
npx @better-auth/cli migrate
```

Create environment variable file in the root directory `.env.local`:

```
BETTER_AUTH_SECRET=thequickbrownfox
BETTER_AUTH_URL=http://localhost:3000
```

Run the development server for Next.js:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dependency Docs

- [Better Auth](https://www.better-auth.com/docs/introduction) -- Typescript-safe Authentication library
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) -- minimal database provider for Better Auth
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs) -- Tailwind CSS utility library
- [Prettier](https://prettier.io/docs/) -- Code Formatter
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) -- Tailwind CSS class sorter
