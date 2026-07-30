# Munavar Hussain - Portfolio

A modern, high-performance personal portfolio website built with Next.js, Tailwind CSS v4, and Framer Motion. Designed to showcase projects, skills, and experience as a Gen AI Developer with a focus on smooth animations and a premium dark-themed aesthetic.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Emails:** [EmailJS](https://www.emailjs.com/)

## ✨ Features

- 🎨 **Modern Dark UI:** A sleek, professional dark theme design with custom UI components (like flow field backgrounds).
- ⚡ **Smooth Scrolling:** Implemented using `lenis` for a premium navigational feel.
- 🎭 **Interactive Animations:** Rich, engaging animations, including parallax galleries, powered by Framer Motion and GSAP.
- 📱 **Fully Responsive:** Optimized layout for mobile, tablet, and desktop screens.
- 🧩 **Modular Architecture:** Cleanly separated sections (Hero, About, Experience, Projects, Skills, Stats, Contact) for easy maintenance.

## 📂 Project Structure

```bash
src/
├── app/              # Next.js App Router (Pages & Layouts)
│   ├── globals.css   # Global styles & Tailwind directives
│   ├── layout.tsx    # Root layout structure
│   └── page.tsx      # Main landing page
├── components/       # React Components
│   ├── sections/     # Page Sections (Hero, Projects, Experience, Skills, Contact, etc.)
│   ├── ui/           # Reusable UI elements (Flow field background, cards, buttons)
│   ├── navbar.tsx    # Navigation bar
│   ├── footer.tsx    # Footer component
│   └── motion.tsx    # Custom motion wrappers
└── lib/              # Utility functions & Portfolio Data (data.ts)
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/husssainY/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Runs the built production server.
-   `npm run lint`: Runs ESLint to check for code quality.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

[MIT](LICENSE)