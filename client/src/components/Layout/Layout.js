import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export default function Layout({
  children,
  title,
  description,
  keywords,
  author,
}) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
