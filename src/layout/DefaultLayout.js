import React from "react";
import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";

export const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header className="header-layout">
        <Header />
      </header>
      <main className="main">Main page content Here</main>
      <footer className="footer-layout">
        <Footer />
      </footer>
    </div>
  );
};
