
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* 브랜드 */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold mb-4 inline-block">
              TUE
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              클래식한 넥타이는 이제 그만. 캐주얼하게 패션 아이템으로 즐기는 새로운 넥타이 문화를 만들어갑니다.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-tue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-tue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-tue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* 쇼핑 */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">쇼핑</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/all" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  전체 제품
                </Link>
              </li>
              <li>
                <Link to="/emotion/excited" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  기대
                </Link>
              </li>
              <li>
                <Link to="/emotion/relaxed" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  편안함
                </Link>
              </li>
              <li>
                <Link to="/emotion/melancholy" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  우울
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">고객지원</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  배송 안내
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  교환 및 반품
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">회사</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  브랜드 소개
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  매장 안내
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-10 pt-10 flex flex-col md:flex-row justify-between text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} TUE. All rights reserved.</p>
          <p className="mt-2 md:mt-0">대한민국 & 일본</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
