# 🚗 CarsMarket — Full-Stack Car Marketplace

A modern, high-performance web application designed for listing, browsing, and managing vehicle sales. Built with a focus on type safety, efficient database querying, and a responsive user experience.

⚠️ **Project Status:** _In active development (MVP phase)._

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS
- **Database & ORM:** Prisma ORM with Supabase (PostgreSQL)
- **State Management & Data Fetching:** Next.js Server Components & Actions

## 📐 Architecture & Key Features

### 🔹 Implemented

- **Database Design:** Structured relational database schema built with Prisma, optimized for car specifications (make, model, year, mileage, price, etc.).
- **Responsive UI:** Fully fluid and modern user interface styled with Tailwind CSS, supporting all mobile and desktop screen sizes.
- **Server-Side Rendering (SSR):** Leveraging Next.js App Router for faster initial page loads and improved SEO metadata management.

### 🔹 In Progress / Roadmap

- [ ] **User Authentication:** Secure seller registration and login using Supabase Auth.
- [ ] **Vehicle Listing Management:** Private dashboard for users to create, edit, and delete their car advertisements.
- [ ] **Image Upload Pipeline:** Secure cloud storage integration for hosting high-resolution vehicle photos.
- [ ] **Advanced Filtering & Search:** Real-time search functionality by price range, location, and vehicle specifications.

## 🚀 Purpose & Focus

The main goal of this application is to implement production-ready patterns in full-stack development. It showcases clean code architecture, type-safe database interactions via Prisma, and seamless integration between frontend and backend layers using Next.js.

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js and `pnpm` installed on your machine.

### Installation

1. Clone the repository:

```bash
   git clone [https://github.com/madmaxlt97/carsmarket.git](https://github.com/madmaxlt97/carsmarket.git).
```

2. Install dependencies:

```bash
    pnpm install
```

3. Run the development server:

```bash
    pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
