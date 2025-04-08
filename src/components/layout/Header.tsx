
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

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
          <Link to="/products/all" className="font-medium link-underline">전체 제품</Link>
          <Link to="/emotion/excited" className="font-medium link-underline">기대</Link>
          <Link to="/emotion/relaxed" className="font-medium link-underline">편안함</Link>
          <Link to="/emotion/melancholy" className="font-medium link-underline">우울</Link>
          <Link to="/about" className="font-medium link-underline">브랜드</Link>
        </nav>
        
        {/* 헤더 우측 아이콘 */}
        <div className="flex items-center space-x-4">
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
              전체 제품
            </Link>
            <Link 
              to="/emotion/excited" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              기대
            </Link>
            <Link 
              to="/emotion/relaxed" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              편안함
            </Link>
            <Link 
              to="/emotion/melancholy" 
              className="font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              우울
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              브랜드
            </Link>
          </nav>
          
          <div className="mt-auto space-y-4">
            <Button className="w-full btn-primary">로그인</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
