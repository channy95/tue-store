
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-md mb-6">{t('aboutTitle')}</h2>
            <div className="text-muted-foreground mb-8 whitespace-pre-line">
              {t('aboutStory')}
            </div>
            <Link to="/about" className="btn-outline inline-block">{t('aboutButtonText')}</Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/0845c565-c6df-47b1-964d-d166c4f74fd4.png" 
                alt="TUE 넥타이 컬렉션" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-40 md:w-48 animate-float">
              <p className="text-sm text-muted-foreground">
                {t('aboutQuote')}
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
