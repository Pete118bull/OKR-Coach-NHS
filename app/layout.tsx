// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NHS OKR Assistant",
  description: "GPT-powered OKR chatbot with file uploads",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <img className="logo" src="/openai.svg" alt="OpenAI Logo" />
      </body>
    </html>
  );
}
