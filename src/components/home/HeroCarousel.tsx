import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroLearning from "@/assets/hero-learning.jpg";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import heroAchievement from "@/assets/hero-achievement.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const slides = [
  {
    image: heroLearning,
    title: "Empower Your Digital Future",
    subtitle: "Learn essential digital skills to thrive in the modern world",
    cta: "Start Learning",
  },
  {
    image: heroCollaboration,
    title: "Learn Together, Grow Together",
    subtitle: "Join thousands of South Sudanese citizens on their digital journey",
    cta: "Join Now",
  },
  {
    image: heroAchievement,
    title: "Achieve Digital Excellence",
    subtitle: "Earn certificates and advance your career with recognized skills",
    cta: "View Courses",
  },
  {
    image: heroCommunity,
    title: "Building a Digital Nation",
    subtitle: "Be part of South Sudan's digital transformation story",
    cta: "Get Started",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <h1
                className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-card/80 mb-8 transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex gap-4 transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Button size="xl" variant="hero" asChild>
                  <Link to="/courses">{slide.cta}</Link>
                </Button>
                <Button size="xl" variant="heroOutline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm rounded-full hover:bg-card/30 transition-colors group"
      >
        <ChevronLeft className="h-6 w-6 text-card group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm rounded-full hover:bg-card/30 transition-colors group"
      >
        <ChevronRight className="h-6 w-6 text-card group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-card/50 hover:bg-card/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
