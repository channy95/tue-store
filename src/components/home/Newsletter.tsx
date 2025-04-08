
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const googleFormUrl = "https://docs.google.com/forms/d/1xqDPG0HLXtL7dMcw8QoQ-kH--LluLs54pQd07IkLCi0/edit?usp=forms_home&ths=true";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Instead of the mock submission, redirect to the Google Form
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    setEmail('');
    
    // 언어에 따른 토스트 메시지 표시
    const toastMessages = {
      ko: {
        title: "리디렉션 중입니다.",
        description: "Google Form으로 이동합니다."
      },
      en: {
        title: "Redirecting...",
        description: "Moving to Google Form."
      },
      ja: {
        title: "リダイレクト中...",
        description: "Google Formに移動します。"
      }
    };
    
    toast({
      title: toastMessages[language].title,
      description: toastMessages[language].description,
    });
  };

  return (
    <section className="section-padding bg-tue-400 text-white">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-md mb-4">{t('newsletterTitle')}</h2>
          <p className="text-white/80 mb-8">
            {t('newsletterSubtitle')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
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
              {isLoading ? (
                language === 'ko' ? '처리 중...' : 
                language === 'en' ? 'Processing...' : '処理中...'
              ) : (
                t('subscribeButton')
              )}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/70">
            {language === 'ko' && '구독은 언제든지 취소할 수 있습니다. 개인정보는 소중히 보호됩니다.'}
            {language === 'en' && 'You can cancel your subscription at any time. Your personal information will be protected.'}
            {language === 'ja' && '購読はいつでもキャンセルできます。個人情報は大切に保護されます。'}
          </p>
          
          <div className="mt-6">
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                {language === 'ko' && '구독 폼으로 바로가기'}
                {language === 'en' && 'Go to Subscription Form'}
                {language === 'ja' && '購読フォームへ'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
