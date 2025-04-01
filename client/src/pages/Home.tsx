import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Introduction } from "@/components/Introduction";
import { PlacesToVisit } from "@/components/PlacesToVisit";
import { MapSection } from "@/components/MapSection";
import { CuisineSection } from "@/components/CuisineSection";
import { AccommodationSection } from "@/components/AccommodationSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { TravelTipsSection } from "@/components/TravelTipsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-sans text-neutral-darkest bg-neutral-lightest">
      <Navbar />
      <HeroSection />
      <Introduction />
      <PlacesToVisit />
      <MapSection />
      <CuisineSection />
      <AccommodationSection />
      <ActivitiesSection />
      <GallerySection />
      <TravelTipsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
