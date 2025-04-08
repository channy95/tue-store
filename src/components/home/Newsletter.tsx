
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const googleFormUrl = "https://docs.google.com/forms/d/1xqDPG0HLXtL7dMcw8QoQ-kH--LluLs54pQd07IkLCi0/edit?usp=forms_home&ths=true";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Instead of the mock submission, redirect to the Google Form
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    setEmail('');
    toast({
      title: "리디렉션 중입니다.",
      description: "Google Form으로 이동합니다.",
    });
  };

  return (
    <section className="section-padding bg-tue-400 text-white">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-md mb-4">TUE의 새로운 소식을 받아보세요</h2>
          <p className="text-white/80 mb-8">
            신제품 출시, 한정판 콜라보레이션, 그리고 특별한 프로모션 소식을 가장 먼저 받아보세요.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="px-4 py-3 rounded-lg flex-1 text-foreground outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-white text-tue-400 hover:bg-white/90 px-6 py-3"
              disabled={isLoading}
            >
              {isLoading ? '처리 중...' : '구독하기'}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/70">
            구독은 언제든지 취소할 수 있습니다. 개인정보는 소중히 보호됩니다.
          </p>
          
          <div className="mt-6">
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                구독 폼으로 바로가기
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
