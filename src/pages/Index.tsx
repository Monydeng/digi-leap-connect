import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyDigiLAP from "@/components/home/WhyDigiLAP";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <Stats />
        <FeaturedCourses />
        <WhyDigiLAP />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
