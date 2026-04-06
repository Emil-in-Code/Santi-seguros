import { Helmet } from "react-helmet-async";

export default function ServiceSEO({ seo, title }) {
  const seoTitle    = seo?.title       ?? title;
  const seoDesc     = seo?.description ?? "";
  const seoKeys     = seo?.keywords    ?? "";
  const seoImage    = seo?.ogImage     ?? "https://desandroseguros.es/seo/opengraph.png";
  const canonical   = seo?.canonical   ?? window.location.href;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description"        content={seoDesc} />
      {seoKeys && <meta name="keywords" content={seoKeys} />}

      {/* Open Graph */}
      <meta property="og:title"       content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image"       content={seoImage} />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image"       content={seoImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
