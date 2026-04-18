import React from "react";
import HeroBanner from "../features/home/HeroBanner";
import FeaturedCollections from "../features/home/FeaturedCollections";
import BestSellers from "../features/home/BestSellers";
import BrandStory from "../features/home/BrandStory";
import FeaturedShowcase from "../features/home/FeaturedShowcase";
import ReviewsCarousel from "../features/home/ReviewsCarousel";
import InstagramGallery from "../features/home/InstagramGallery";
import Newsletter from "../features/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <BestSellers />
      <BrandStory />
      <FeaturedShowcase />
      <ReviewsCarousel />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
