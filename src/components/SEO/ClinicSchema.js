/**
 * Generates JSON-LD structured data for the clinic
 */
export const generateClinicSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr Munisa Clinic",
    "url": "https://dr-munisa.uz",
    "logo": "https://dr-munisa.uz/icons/icon-512x512.png",
    "image": "https://dr-munisa.uz/images/clinic-photo.jpg",
    "telephone": "+998 94 959 0000", // Replace with actual phone
    "email": "info@dr-munisa.uz", // Replace with actual email
    "description": "Natural-looking hair, beard and eyebrow transplants by Dr Munisa. Book a free consultation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street", // Replace with actual address
      "addressLocality": "Tashkent",
      "addressRegion": "Tashkent",
      "postalCode": "100000", // Replace with actual postal code
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.311081, // Replace with actual coordinates
      "longitude": 69.240562 // Replace with actual coordinates
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "medicalSpecialty": [
      "Hair Transplant",
      "Beard Transplant",
      "Eyebrow Transplant"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "FUE Hair Transplant",
        "description": "Follicular Unit Extraction hair transplant procedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Beard Transplant",
        "description": "Beard restoration and transplant procedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Eyebrow Transplant",
        "description": "Eyebrow restoration and transplant procedure"
      }
    ]
  };
};

/**
 * Generates JSON-LD structured data for a blog post
 */
export const generateBlogPostSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.featuredImage || "https://dr-munisa.uz/images/blog-default.jpg",
    "datePublished": post.publishDate,
    "dateModified": post.modifiedDate || post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author || "Dr. Munisa",
      "url": "https://dr-munisa.uz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr Munisa Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dr-munisa.uz/icons/icon-512x512.png"
      }
    },
    "description": post.excerpt || post.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dr-munisa.uz/blog/${post.slug}`
    }
  };
};
