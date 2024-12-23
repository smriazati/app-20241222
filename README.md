# My Next.js App

This is a Next.js application set up with TypeScript and Tailwind CSS. The application fetches and displays project data from a Sanity CMS.

## Project Structure

```
my-nextjs-app
├── pages
│   ├── api
│   │   └── hello.ts         # API route that responds with a simple message
│   ├── index.tsx            # Main entry point of the application
│   └── projects.tsx         # Displays projects fetched from Sanity
├── public
│   └── favicon.ico          # Favicon for the application
├── styles
│   ├── globals.css          # Global CSS styles
│   └── tailwind.css         # Tailwind CSS styles
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── next-env.d.ts            # Type definitions for Next.js
├── next.config.js           # Next.js configuration
├── package.json             # npm configuration
└── README.md                # Documentation for the project
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- **TypeScript**: The application is built using TypeScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Sanity CMS Integration**: Fetches project data from Sanity using a defined query.

## License

This project is licensed under the MIT License.