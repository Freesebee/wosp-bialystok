"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import { ReactNode } from "react";
import AppFooter from "./_components/footer/appFooter";
import Navbar from "./_components/navbar/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl-Pl" data-bs-theme="dark">
      <body>
        <Navbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
