
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-md mb-6">클래식은 이제 그만, <br />캐주얼한 넥타이의 시대</h2>
            <p className="text-muted-foreground mb-6">
              TUE는 한국과 일본에서 탄생한 캐주얼, 빈티지 넥타이 브랜드입니다. 
              우리는 넥타이가 단순한 정장용 아이템이 아닌, 개성을 표현하는 패션 액세서리가 될 수 있다고 믿습니다.
            </p>
            <p className="text-muted-foreground mb-8">
              '감정'에 따라 구분된 제품 라인은 당신의 기분과 스타일에 맞는 넥타이를 찾을 수 있게 도와줍니다.
              캐주얼한 옷차림에도 어울리는 TUE의 넥타이로 당신만의 스타일을 완성하세요.
            </p>
            <Link to="/about" className="btn-outline inline-block">브랜드 스토리</Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="public/lovable-uploads/0845c565-c6df-47b1-964d-d166c4f74fd4.png" 
                alt="TUE 넥타이 컬렉션" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-40 md:w-48 animate-float">
              <p className="text-sm text-muted-foreground">
                "넥타이는 단순한 드레스 코드가 아닌, 감정을 표현하는 방식입니다."
              </p>
              <p className="text-right text-xs mt-2 font-semibold">
                — TUE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
