
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const emotions = [
  { 
    id: 'excited', 
    name: '기대', 
    description: '새로운 시작과 설렘을 표현하는 타이 컬렉션', 
    color: 'bg-tue-400',
    image: 'public/lovable-uploads/ca45efef-67d4-4925-b2f9-4da0090614d6.png'
  },
  { 
    id: 'relaxed', 
    name: '편안함', 
    description: '일상에 녹아드는 편안한 분위기의 타이 컬렉션', 
    color: 'bg-denim-500',
    image: 'public/lovable-uploads/30042ce1-9d09-458d-8c21-f1c3a5c52964.png'
  },
  { 
    id: 'melancholy', 
    name: '우울', 
    description: '깊은 감성을 담은 차분한 타이 컬렉션', 
    color: 'bg-beige-200',
    image: 'public/lovable-uploads/6b51739f-0dd1-444e-8ead-c6628e31209c.png'
  },
];

const EmotionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">감정에 따른 컬렉션</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            TUE는 다양한 감정을 표현하는 넥타이를 선보입니다. 당신의 기분과 스타일에 맞는 컬렉션을 찾아보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emotions.map((emotion) => (
            <Link 
              to={`/emotion/${emotion.id}`} 
              key={emotion.id}
              className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[5/6] overflow-hidden">
                <img 
                  src={emotion.image} 
                  alt={emotion.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span 
                  className={`${emotion.color} text-white px-3 py-1 rounded-full text-sm mb-2 inline-block`}
                >
                  {emotion.name}
                </span>
                <h3 className="text-white text-xl font-medium">{emotion.description}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionSection;
