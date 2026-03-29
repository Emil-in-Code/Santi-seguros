import { Helmet } from "react-helmet-async";

export default function ServiceSEO({ seo, title }) {
  const seoTitle = seo?.title ?? `${title} | Preventiva VIVO`;
  const seoDesc  = seo?.description ?? "";
  const seoKeys  = seo?.keywords ?? "";
  const seoImage = seo?.image ?? "/og/default.jpg";

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      {seoKeys && <meta name="keywords" content={seoKeys} />}

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title"       content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image"       content={seoImage} />
      <meta property="og:type"        content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image"       content={seoImage} />
    </Helmet>
  );
}
