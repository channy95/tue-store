
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LookbookSection from '@/components/home/Lookbook';
import { useLanguage } from '@/contexts/LanguageContext';

const Lookbook = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  // 언어가 변경되면 타이틀 업데이트
  useEffect(() => {
    document.title = language === 'ko' ? 'TUE - 룩북' : 
                    language === 'en' ? 'TUE - Lookbook' : 
                    'TUE - ルックブック';
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <LookbookSection />
      </main>
      <Footer />
    </div>
  );
};

export default Lookbook;
