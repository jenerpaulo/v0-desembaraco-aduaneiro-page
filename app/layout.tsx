import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Desembaraço Aduaneiro - DEMNPEX",
  description: "Especialistas em desembaraço aduaneiro e comércio exterior. Sua ponte para o mercado global.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics component temporarily removed */}
      </body>
    </html>
  )
}
