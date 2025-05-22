import '../styles/index.css'; // Import Tailwind CSS
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}