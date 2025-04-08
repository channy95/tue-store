
import { useLanguage } from '@/contexts/LanguageContext';

const lookbookImages = [
  "/lovable-uploads/ca0ac596-83ec-460f-993a-a626820f8e6a.png",
  "/lovable-uploads/6b51739f-0dd1-444e-8ead-c6628e31209c.png",
]

const Lookbook = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-beige-100">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">{t('lookbookTitle')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('lookbookSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lookbookImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`TUE ${t('lookbookTitle')} ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
