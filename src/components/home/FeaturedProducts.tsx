
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 임시 제품 데이터
const products = [
  {
    id: 1,
    name: '오렌지 빈티지 패턴 타이',
    price: 59000,
    emotion: '기대',
    image: 'public/lovable-uploads/30042ce1-9d09-458d-8c21-f1c3a5c52964.png',
  },
  {
    id: 2,
    name: '레드 스트라이프 타이',
    price: 49000,
    emotion: '편안함',
    image: 'public/lovable-uploads/ca45efef-67d4-4925-b2f9-4da0090614d6.png',
  },
  {
    id: 3,
    name: '브라운 체크 패턴 타이',
    price: 55000,
    emotion: '우울',
    image: 'public/lovable-uploads/0845c565-c6df-47b1-964d-d166c4f74fd4.png',
  },
  {
    id: 4,
    name: '블루 데님 타이',
    price: 65000,
    emotion: '기대',
    image: 'public/lovable-uploads/6b51739f-0dd1-444e-8ead-c6628e31209c.png',
  },
];

const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = products.slice(startIndex, startIndex + 3);
  
  const handleNext = () => {
    if (startIndex + 3 < products.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };
  
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(products.length - 3);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex justify-between items-center mb-10">
          <h2 className="heading-md">인기 제품</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 border border-muted-foreground/30 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="이전 제품"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 border border-muted-foreground/30 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="다음 제품"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <Link 
              to={`/products/${product.id}`} 
              key={product.id}
              className="group"
            >
              <div className="mb-4 aspect-[5/6] overflow-hidden rounded-lg relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.emotion}
                </div>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-tue-400 font-medium">{product.price.toLocaleString()}원</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products/all" className="btn-primary inline-block">
            전체 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
