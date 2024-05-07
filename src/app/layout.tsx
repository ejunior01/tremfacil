import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TremFacil",
  description: "Projeto desenvolvimento pelos alunos do Senac do curso de análise e desenvolvimento de sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn("container p-4", inter.className)}>{children}</body>
    </html>
  );
}
