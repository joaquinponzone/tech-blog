# Lite Tech Blog

Lite Tech Blog is a modern, responsive web application built with Next.js, TypeScript, and Tailwind CSS. It showcases the latest technology articles and blog posts in a sleek, user-friendly interface.

## Features

- Responsive design for optimal viewing on all devices
- Dynamic content loading with server-side rendering
- Topic filtering for easy navigation
- Most viewed posts section
- New post creation with image upload
- Seamless integration with Vercel Blob for image storage
- PostgreSQL database for content management

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI
- React Hook Form
- Zod for form validation
- Vercel Postgres
- Vercel Blob
- Bun

## Getting Started

### Prerequisites

- Bun or Node.js (v18 or later)
- Vercel account (for deployment and database)

### Installation

1. Clone the repository:
   ```
   git clone https://gitlab.com/litebox/internal/challenges/dev-joaquin-ponzone-frontend.git
   cd dev-joaquin-ponzone-frontend
   ```

2. Install dependencies:
   ```
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   POSTGRES_URL=your_postgres_connection_string
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```

4. Run the development server:
   ```
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Database Seeding

To populate the database with initial data, run:
   ```
   bun run seed
   ```

