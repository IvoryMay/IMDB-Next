import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/movie/components/Container";
import Header from "@/movie/components/Header";
import Provider from "./Provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB Clone",
  description: "Movie Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider attribute="class" defaultTheme="system">
          <Container>
            <Header />
            {/* <Navbar /> */}
            {/* <SearchBar /> */}
            <Suspense fallback= {null}>
            {children}
            </Suspense>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
