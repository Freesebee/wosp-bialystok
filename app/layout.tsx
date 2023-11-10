"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import { Navbar } from "./components/navbar";
import { ReactNode } from "react";
import AppFooter from "./components/footer/appFooter";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}