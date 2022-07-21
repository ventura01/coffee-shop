import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>Café Premier {title ? `| ${title}` : ""}</title>
        <meta name="description" content={description ? description : ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
