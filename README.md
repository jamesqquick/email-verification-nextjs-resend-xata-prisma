This is a demo of an email confirmation workflow using [Next.js](https://nextjs.org/), [Resend](https://resend.com/), [Xata.io](https://xata.io/), and [Prisma.io](https://www.prisma.io/).

[![Email Verification from Figma](https://github.com/user-attachments/assets/e11dd073-56b0-4750-8149-7c688a9388e7)](https://youtu.be/OTgGpovffNY)

## Getting Started

First, add your environment variables. You can copy the example variables using the following command:

```bash
cp .env.example .env.local
```

Fill in the following properties:

- `RESEND_API_KEY` - your API key from Resend
- `DATABASE_URL` - the url of your database (this demo uses a Postgres DB from Xata)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
