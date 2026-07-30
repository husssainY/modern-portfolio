import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Munavar Hussain | Gen AI Developer",
  description: "Gen AI Developer with 2+ years of experience building cutting-edge Generative and Agentic AI solutions. Specializing in LangChain, AWS Bedrock, Multi-Agent Systems, and intelligent automation.",
  keywords: ["Gen AI Developer", "Generative AI", "AI Agents", "LangChain", "AWS Bedrock", "Multi-Agent Systems", "Python", "Portfolio", "Munavar Hussain"],
  authors: [{ name: "Mohamed Munavar Hussain Y" }],
  openGraph: {
    title: "Munavar Hussain | Gen AI Developer",
    description: "Building cutting-edge Generative and Agentic AI solutions that bridge creative vision with real-world impact",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
