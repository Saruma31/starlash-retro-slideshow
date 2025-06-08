import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const RetroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const slides = [
    // ... deine Slides hier ...
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{ left: `${star.x}%`, top: `${star.y}%`, width: `${star.size}px`, height: `${star.size}px` }}
        >
          <Star className="text-white opacity-70" size={star.size} />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col">
        <div className="bg-black bg-opacity-50 border-b-4 border-cyan-400 p-4">
          <div className="flex justify-between items-center">
            <div className="pixel-font text-cyan-400 text-lg font-bold">
              PRÄSENTATION STARLASH
            </div>
            <ScrollArea className="max-w-md">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 border-2 flex-shrink-0 ${index === currentSlide ? 'bg-cyan-400 border-cyan-400' : 'bg-transparent border-gray-500'} hover:border-cyan-400 transition-colors`}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 relative">
          <button onClick={prevSlide} disabled={currentSlide === 0} className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'}`}>
            <ChevronLeft size={24} />
          </button>

          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'}`}>
            <ChevronRight size={24} />
          </button>

          <div className="max-w-5xl w-full mx-8 h-full flex items-center">
            {/* Slide content rendering wie gehabt */}
          </div>
        </div>

        {/* Footer mit den Buttons wurde entfernt */}

      </div>

      <div className="absolute top-20 right-10 text-4xl animate-bounce">
        🛸
      </div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse">
        🌟
      </div>
    </div>
  );
};

export default RetroSlideshow;
