import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

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
            <Navbar />
            <SearchBar />
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
