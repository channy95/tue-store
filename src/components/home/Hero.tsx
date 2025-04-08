
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const heroImages = [
  "/lovable-uploads/30042ce1-9d09-458d-8c21-f1c3a5c52964.png",
  "/lovable-uploads/ca0ac596-83ec-460f-993a-a626820f8e6a.png",
  "/lovable-uploads/ca45efef-67d4-4925-b2f9-4da0090614d6.png",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 이미지 슬라이더 */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`TUE ${t('heroAltText')} ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* 텍스트 오버레이 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-white heading-lg mb-8 md:mb-10">
            {t('heroTitle')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-md mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products">
              <Button className="btn-primary flex items-center group min-w-[180px]">
                {t('heroButtonText')} 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="btn-outline min-w-[180px]">
                {t('aboutButtonText')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
