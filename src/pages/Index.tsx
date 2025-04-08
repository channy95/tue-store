
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import EmotionSection from '@/components/home/EmotionSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Lookbook from '@/components/home/Lookbook';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <EmotionSection />
        <AboutSection />
        <FeaturedProducts />
        <Lookbook />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
