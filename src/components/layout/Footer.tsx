
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  
  const footerText = {
    ko: {
      brandDesc: "클래식한 넥타이는 이제 그만. 캐주얼하게 패션 아이템으로 즐기는 새로운 넥타이 문화를 만들어갑니다.",
      shopping: "쇼핑",
      allProducts: "전체 제품",
      excited: "기대",
      relaxed: "편안함",
      melancholy: "우울",
      support: "고객지원",
      contact: "문의하기",
      shipping: "배송 안내",
      returns: "교환 및 반품",
      faq: "자주 묻는 질문",
      company: "회사",
      about: "브랜드 소개",
      stores: "매장 안내",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      rights: "© " + new Date().getFullYear() + " TUE. All rights reserved.",
      location: "대한민국 & 일본"
    },
    en: {
      brandDesc: "Classic neckties are over. We're creating a new necktie culture to enjoy casually as a fashion item.",
      shopping: "Shopping",
      allProducts: "All Products",
      excited: "Excited",
      relaxed: "Relaxed",
      melancholy: "Melancholy",
      support: "Customer Support",
      contact: "Contact Us",
      shipping: "Shipping",
      returns: "Returns & Exchanges",
      faq: "FAQ",
      company: "Company",
      about: "About Brand",
      stores: "Store Locations",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© " + new Date().getFullYear() + " TUE. All rights reserved.",
      location: "Korea & Japan"
    },
    ja: {
      brandDesc: "クラシックなネクタイはもう終わり。カジュアルにファッションアイテムとして楽しむ新しいネクタイ文化を作ります。",
      shopping: "ショッピング",
      allProducts: "全ての製品",
      excited: "期待",
      relaxed: "リラックス",
      melancholy: "メランコリー",
      support: "カスタマーサポート",
      contact: "お問い合わせ",
      shipping: "配送案内",
      returns: "交換・返品",
      faq: "よくある質問",
      company: "会社",
      about: "ブランド紹介",
      stores: "店舗案内",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      rights: "© " + new Date().getFullYear() + " TUE. All rights reserved.",
      location: "韓国 & 日本"
    }
  };
  
  const text = footerText[language];

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
              {text.brandDesc}
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
            <h3 className="font-bold text-lg mb-4">{text.shopping}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/all" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.allProducts}
                </Link>
              </li>
              <li>
                <Link to="/emotion/excited" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.excited}
                </Link>
              </li>
              <li>
                <Link to="/emotion/relaxed" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.relaxed}
                </Link>
              </li>
              <li>
                <Link to="/emotion/melancholy" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.melancholy}
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">{text.support}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.contact}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.shipping}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.returns}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">{text.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.about}
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.stores}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-tue-400 transition-colors">
                  {text.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-10 pt-10 flex flex-col md:flex-row justify-between text-muted-foreground text-sm">
          <p>{text.rights}</p>
          <p className="mt-2 md:mt-0">{text.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
