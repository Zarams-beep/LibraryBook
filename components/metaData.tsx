import React from 'react';

const MetaData = () => {
  const metadata = {
    title: "Library",
    description: "Library"
  };

  return (
    <>
        {/* Main Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags for Socials */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://yourwebsite.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default MetaData;
