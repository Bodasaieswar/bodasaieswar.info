import { Helmet } from "react-helmet-async";

const Head = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sai Eswar Portfolio</title>

      <meta
        name="description"
        content="Discover Sai Eswar's portfolio. A software engineer specializing in developing scalable web applications, optimizing workflows, and creating cutting-edge tech solutions."
      />

      <meta
        name="keywords"
        content="Sai Eswar, eswarcareless, Sai Eswar Boda, Sai Eswar University of Arizona, Sai Eswar Boda UofA, Software Engineer, Portfolio, Web Developer, Solutions Developer, Full Stack, Scalable Systems, Arizona, React, Node.js, AWS, Azure"
      />

      <meta name="author" content="Sai Eswar Boda" />

      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sai Eswar Portfolio - Solutions Developer" />
      <meta
        property="og:description"
        content="Explore Sai Eswar's achievements in software engineering, building robust web solutions, and optimizing system workflows."
      />
      <meta property="og:image" content="SaiEswar.png" />
      <meta property="og:url" content="https://bodasaieswar.info" />
      <meta property="og:site_name" content="Sai Eswar Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sai Eswar - Software Engineer & Entrepreneur" />
      <meta
        name="twitter:description"
        content="Visit Sai Eswar's portfolio to learn about his work in creating innovative software solutions and web applications."
      />
      <meta name="twitter:image" content="SaiEswar.png" />
      <meta name="twitter:site" content="@eswarcareless" />

      <link rel="icon" href="SaiEswar.png" type="image/svg+xml" />

      <link rel="canonical" href="https://bodasaieswar.info" />

      {/* Performance Optimization */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sai Eswar",
            "url": "https://bodasaieswar.info/",
            "jobTitle": "Software Engineer",
            "sameAs": [
              "https://github.com/Bodasaieswar", 
              "https://www.linkedin.com/in/bodasaieswar/"
            ]
          }
        `}
      </script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QHMJCB30SG"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-QHMJCB30SG');
        `}
      </script>
    </Helmet>
  );
};

export default Head;
