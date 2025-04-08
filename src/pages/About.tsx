
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/home/AboutSection';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  // 언어가 변경되면 타이틀 업데이트
  useEffect(() => {
    document.title = language === 'ko' ? 'TUE - 브랜드 스토리' : 
                    language === 'en' ? 'TUE - Brand Story' : 
                    'TUE - ブランドストーリー';
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 pt-24">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
