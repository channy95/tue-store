
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  // 언어가 변경되면 타이틀 업데이트
  useEffect(() => {
    document.title = language === 'ko' ? 'TUE - 제품 컬렉션' : 
                    language === 'en' ? 'TUE - Product Collection' : 
                    'TUE - 製品コレクション';
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 pt-24">
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
