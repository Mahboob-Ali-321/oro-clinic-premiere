import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { BookingModal } from "@/components/site/BookingModal";
import {
  About,
  Contact,
  Footer,
  Gallery,
  Services,
  Testimonials,
  TrustBar,
  WhyUs,
} from "@/components/site/Sections";

const title = "Oro Dental Clinic Bhagalpur | Dr. Anand Mohan";
const description =
  "Gentle, expert dental care in Bhagalpur — root canals, implants, cleaning and cosmetic dentistry by Dr. Anand Mohan. 5.0 rating from 1,004 Google reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Oro Dental Clinic",
          telephone: "+91 96169 84243",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Tilkamanjhi Chowk, Opposite To Kalyan Jewellers, Jail Road, Sabour Rd",
            addressLocality: "Bhagalpur",
            addressRegion: "Bihar",
            postalCode: "812001",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "1004",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
      <BookingModal />
    </>
  );
}
