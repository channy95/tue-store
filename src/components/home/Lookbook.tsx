
const lookbookImages = [
  "public/lovable-uploads/ca0ac596-83ec-460f-993a-a626820f8e6a.png",
  "public/lovable-uploads/6b51739f-0dd1-444e-8ead-c6628e31209c.png",
]

const Lookbook = () => {
  return (
    <section className="section-padding bg-beige-100">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">룩북</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            TUE 넥타이로 완성한 다양한 스타일링을 만나보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lookbookImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`TUE 룩북 이미지 ${index + 1}`} 
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
