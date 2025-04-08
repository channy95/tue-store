
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
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const googleFormUrl = "https://docs.google.com/forms/d/1xqDPG0HLXtL7dMcw8QoQ-kH--LluLs54pQd07IkLCi0/edit?usp=forms_home&ths=true";

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
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* 메뉴 드롭다운 버튼 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Menu size={24} className="text-white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-white/20 text-white">
              <DropdownMenuItem asChild>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('allProducts')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('excited')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('relaxed')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('melancholy')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('brand')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 cursor-pointer">
                  {t('lookbook')}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 로고 */}
          <Link to="/" className="font-display text-2xl font-bold text-white">
            TUE
          </Link>
        </div>
        
        {/* 헤더 우측 아이콘 */}
        <div className="flex items-center space-x-4">
          {/* 언어 선택 */}
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value as 'ko' | 'en' | 'ja')}
          >
            <SelectTrigger className="w-[70px] h-8 border-none bg-transparent text-white">
              <div className="flex items-center">
                <Globe size={16} className="mr-1" />
                <span className="uppercase">{language}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-black/90 backdrop-blur-md border-white/20 text-white">
              <SelectItem value="ko" className="text-white hover:bg-white/20">한국어</SelectItem>
              <SelectItem value="en" className="text-white hover:bg-white/20">English</SelectItem>
              <SelectItem value="ja" className="text-white hover:bg-white/20">日本語</SelectItem>
            </SelectContent>
          </Select>
          
          <button className="p-1 text-white">
            <Search size={20} />
          </button>
          
          <Link to="/cart" className="relative p-1 text-white">
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black w-5 h-5 text-xs flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* 모바일 전체 메뉴 */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="font-display text-2xl font-bold text-white">
              TUE
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('allProducts')}
            </a>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('excited')}
            </a>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('relaxed')}
            </a>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('melancholy')}
            </a>
            <Link 
              to="/about" 
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('brand')}
            </Link>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium py-2 border-b border-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('lookbook')}
            </a>
            
            {/* 모바일 메뉴 내 언어 선택 */}
            <div className="py-2 border-b border-white/20">
              <p className="font-medium mb-2 text-white">언어 선택 / Language / 言語</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setLanguage('ko')} 
                  className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
                >
                  한국어
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('ja')} 
                  className={`px-3 py-1 rounded ${language === 'ja' ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
                >
                  日本語
                </button>
              </div>
            </div>
          </nav>
          
          <div className="mt-auto space-y-4">
            <Button className="w-full bg-white text-black hover:bg-white/80">{t('login')}</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
