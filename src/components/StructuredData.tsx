export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JAXE TECH",
    "description": "Agence digitale spécialisée dans le développement de sites web et applications mobiles à Lomé, Togo",
    "url": "https://jaxe-tech.com",
    "logo": "https://jaxe-tech.com/logo.png",
    "image": "https://jaxe-tech.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lomé",
      "addressCountry": "TG",
      "addressRegion": "Maritime"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+228-97-99-99-43",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/jaxe-tech",
      "https://twitter.com/jaxetech",
      "https://www.facebook.com/jaxetech"
    ],
    "foundingDate": "2020",
    "foundingLocation": {
      "@type": "Place",
      "name": "Lomé, Togo"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Togo"
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "Digital Transformation",
      "E-commerce Solutions",
      "SEO Services"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JAXE TECH",
    "description": "Agence digitale basée à Lomé, Togo, spécialisée dans la création de sites web et applications mobiles",
    "url": "https://jaxe-tech.com",
    "telephone": "+228-97-99-99-43",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avédjii",
      "addressLocality": "Lomé",
      "addressCountry": "TG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.1319,
      "longitude": 1.2228
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "XOF"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JAXE TECH",
    "url": "https://jaxe-tech.com",
    "description": "Site officiel de JAXE TECH, agence digitale au Togo",
    "inLanguage": "fr-TG",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jaxe-tech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
