
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  "public/lovable-uploads/30042ce1-9d09-458d-8c21-f1c3a5c52964.png",
  "public/lovable-uploads/ca0ac596-83ec-460f-993a-a626820f8e6a.png",
  "public/lovable-uploads/ca45efef-67d4-4925-b2f9-4da0090614d6.png",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              alt={`TUE 넥타이 이미지 ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}
      </div>

      {/* 텍스트 오버레이 */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32">
        <div className="max-w-lg">
          <h1 className="text-white heading-lg mb-4 md:mb-6">
            감정을 표현하는 <br />새로운 방식
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-light">
            클래식한 넥타이는 이제 그만. <br />
            TUE와 함께 패션 액세서리로서의 넥타이를 재발견하세요.
          </p>
          <div className="flex space-x-4">
            <Button className="btn-primary flex items-center group">
              컬렉션 보기 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
            <Button variant="outline" className="btn-outline text-white border-white hover:bg-white hover:text-tue-400">
              브랜드 스토리
            </Button>
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
