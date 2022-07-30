import '../styles/globals.css';
import '../styles/contact.css';
import '../styles/about.css';
import '../styles/register.css';
import '../styles/example.css';
import '../styles/login.css';
import Head from "next/head";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp;
