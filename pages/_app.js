import '../styles/globals.css';
import '../styles/contact.css';
import '../styles/about.css';
import '../styles/register.css';
import '../styles/example.css';
import '../styles/login.css';
import '../styles/main.css';
import Head from "next/head";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '/components/Header';
import Footer from '/components/Footer';
// import MyHeader from '@/layout/MyHeader';
// import MyFooter from '@/layout/MyFooter';

function MyApp({ Component, pageProps }) {
  /***** If ABOUT Page not require Header Section *****/
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />)
  // }
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      {/* <MyHeader /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* <MyFooter /> */}
    </React.Fragment>
  )
}

export default MyApp;
