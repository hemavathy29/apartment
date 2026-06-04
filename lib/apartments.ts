export interface Apartment {
  slug: string;
  name: string;
  location: string;
  area: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  bedrooms: string;
  bathrooms: string;
  size: string;
}

export const apartments: Apartment[] = [
  {
    slug: "den-villa",
    name: "The Den Villa",
    location: "S Kolathur, Chennai",
    area: "S Kolathur",
    tagline: "Where Comfort Meets Character",
    description:
      "The Den Villa offers an unparalleled living experience in the heart of S Kolathur. Thoughtfully designed interiors, premium furnishings, and modern amenities come together to create a space that feels like home from the very first moment.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    features: ["24/7 Security", "Covered Parking", "High-Speed WiFi", "Power Backup"],
    amenities: ["Fully Furnished", "Air Conditioning", "Modular Kitchen", "Washing Machine", "Smart TV", "Water Purifier"],
    bedrooms: "2–3 BHK",
    bathrooms: "2",
    size: "1,200–1,800 sq ft",
  },
  {
    slug: "lavender",
    name: "The Lavender",
    location: "Kovilambakkam, Chennai",
    area: "Kovilambakkam",
    tagline: "Serenity in Every Corner",
    description:
      "The Lavender is a premium serviced apartment nestled in the calm neighbourhood of Kovilambakkam. Designed with a calming palette and luxurious interiors, it offers the perfect retreat after a busy day — serene, sophisticated, and entirely yours.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
    features: ["Gated Community", "CCTV Surveillance", "Visitor Parking", "Housekeeping"],
    amenities: ["Fully Furnished", "Air Conditioning", "Modular Kitchen", "Washing Machine", "Smart TV", "Study Desk"],
    bedrooms: "1–2 BHK",
    bathrooms: "2",
    size: "900–1,400 sq ft",
  },
  {
    slug: "ocean-shores",
    name: "The Ocean Shores",
    location: "Thoraipakkam, Chennai",
    area: "Thoraipakkam",
    tagline: "Luxury Living on the OMR Corridor",
    description:
      "The Ocean Shores redefines urban luxury on the prestigious OMR IT corridor. Ideal for professionals and executives, this property combines contemporary design with world-class amenities to deliver an exceptional living experience in one of Chennai's most vibrant zones.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80",
    ],
    features: ["Rooftop Terrace", "Gym Access", "Swimming Pool", "Concierge Service"],
    amenities: ["Fully Furnished", "Central AC", "Gourmet Kitchen", "Washing Machine", "Smart TV", "Work Station"],
    bedrooms: "2–4 BHK",
    bathrooms: "3",
    size: "1,500–2,500 sq ft",
  },
  {
    slug: "value-stay",
    name: "The Value Stay",
    location: "Nanganallur, Chennai",
    area: "Nanganallur",
    tagline: "Premium Comfort, Smart Value",
    description:
      "The Value Stay in Nanganallur delivers premium quality at an exceptional price point. Strategically located near key transport hubs and business districts, it offers smart, fully-serviced living without compromise — ideal for long stays and corporate guests.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    features: ["Metro Connectivity", "24/7 Security", "Covered Parking", "Power Backup"],
    amenities: ["Fully Furnished", "Air Conditioning", "Compact Kitchen", "Washing Machine", "Smart TV", "Internet"],
    bedrooms: "1–2 BHK",
    bathrooms: "1–2",
    size: "650–1,100 sq ft",
  },
];

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}
