
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  // 언어가 변경되면 타이틀 업데이트
  useEffect(() => {
    document.title = language === 'ko' ? 'TUE - 감정을 표현하는 넥타이' : 
                     language === 'en' ? 'TUE - Ties That Express Emotions' : 
                     'TUE - 感情を表現するネクタイ';
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
