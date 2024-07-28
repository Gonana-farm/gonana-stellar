import React, { useState } from "react";
// ensure all pages have Bootstrap CSS
import "../style.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Gonana ~ Built for farmers by Experts</title>
      <meta name="title" content="Official Gonana Website" />
      {/* <meta
        name="description"
        content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://uideck.com/play/" />
      <meta
        property="og:title"
        content="Play - Free Open Source HTML Bootstrap Template by UIdeck"
      />
      <meta
        property="og:description"
        content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
      />
      <meta
        property="og:image"
        content="https://uideck.com/wp-content/uploads/2021/09/play-meta-bs.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://uideck.com/play/" />
      <meta
        property="twitter:title"
        content="Play - Free Open Source HTML Bootstrap Template by UIdeck"
      />
      <meta
        property="twitter:description"
        content="Play - Free Open Source HTML Bootstrap Template by UIdeck Team"
      />
      <meta
        property="twitter:image"
        content="https://uideck.com/wp-content/uploads/2021/09/play-meta-bs.jpg"
      /> */}

      <link
        rel="shortcut icon"
        href="assets/images/favicon.svg"
        type="image/svg"
      />

      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/lineicons.css" />
      <link rel="stylesheet" href="/assets/css/ud-styles.css" />

      <Component {...pageProps} />

      <script src="/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      <script src="/assets/js/main.js"></script>
    </>
  );
}

export default MyApp;
