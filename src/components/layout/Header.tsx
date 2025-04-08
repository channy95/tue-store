
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="font-display text-2xl font-bold">
          TUE
        </Link>
        
        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/products/all" className="font-medium link-underline">{t('allProducts')}</Link>
          <Link to="/emotion/excited" className="font-medium link-underline">{t('excited')}</Link>
          <Link to="/emotion/relaxed" className="font-medium link-underline">{t('relaxed')}</Link>
          <Link to="/emotion/melancholy" className="font-medium link-underline">{t('melancholy')}</Link>
          <Link to="/about" className="font-medium link-underline">{t('brand')}</Link>
        </nav>
        
        {/* 헤더 우측 아이콘 */}
        <div className="flex items-center space-x-4">
          {/* 언어 선택 */}
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value as 'ko' | 'en' | 'ja')}
          >
            <SelectTrigger className="w-[70px] h-8 border-none bg-transparent">
              <div className="flex items-center">
                <Globe size={16} className="mr-1" />
                <span className="uppercase">{language}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
            </SelectContent>
          </Select>
          
          <button className="p-1">
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative p-1">
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-tue-400 text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          {/* 모바일 메뉴 토글 버튼 */}
          <button 
            className="md:hidden p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="font-display text-2xl font-bold">
              TUE
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <Link 
              to="/products/all" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('allProducts')}
            </Link>
            <Link 
              to="/emotion/excited" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('excited')}
            </Link>
            <Link 
              to="/emotion/relaxed" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('relaxed')}
            </Link>
            <Link 
              to="/emotion/melancholy" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('melancholy')}
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('brand')}
            </Link>
            
            {/* 모바일 메뉴 내 언어 선택 */}
            <div className="py-2 border-b border-muted">
              <p className="font-medium mb-2">언어 선택 / Language / 言語</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setLanguage('ko')} 
                  className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-tue-400 text-white' : 'bg-muted'}`}
                >
                  한국어
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`px-3 py-1 rounded ${language === 'en' ? 'bg-tue-400 text-white' : 'bg-muted'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('ja')} 
                  className={`px-3 py-1 rounded ${language === 'ja' ? 'bg-tue-400 text-white' : 'bg-muted'}`}
                >
                  日本語
                </button>
              </div>
            </div>
          </nav>
          
          <div className="mt-auto space-y-4">
            <Button className="w-full btn-primary">{t('login')}</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
