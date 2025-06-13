// RetroSlideshow.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const RetroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState<Array<{ id: number, x: number, y: number, size: number }>>([]);

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
    {
      type: 'title',
      title: 'STARLASH',
      subtitle: 'Ein selbst programmiertes Videospiel',
      content: null,
      images: []
    },
    {
      type: 'menu',
      title: 'INHALTSVERZEICHNIS',
      subtitle: '',
      content: [
        '1. Präsentation des Produkts',
        '2. Arbeitsschritte',
        '3. Highlights und Schwierigkeiten',
        '4. Reflexion der Ziele',
        '5. Fazit'
      ],
      images: []
    },
    {
      type: 'content',
      title: 'PRODUKT',
      subtitle: 'Space-Shooter-Spiel',
      content: [
        '🚀 Selbst programmiertes Space-Shooter-Spiel',
        '',
        '⚡ Mit Unity und C# entwickelt',
        '',
        '🎮 Raumschiff steuern, Asteroiden zerstören',
        '',
        '🌟 Power-Ups, Lebenssystem, Punktesystem',
        '',
        '🎨 Eigenes Design',
        '',
        '✅ Vorschau des Projekts'
      ],
      images: [
        'https://i.imgur.com/kHTWx7J.png',
        'https://i.imgur.com/48BeYyx.png'
      ]
    },
    {
      type: 'content',
      title: 'ARBEITSSCHRITTE',
      subtitle: 'Entwicklungsprozess',
      content: [
        '💡 Projektidee festgelegt',
        '📚 Tutorials geschaut, Grundlagen gelernt',
        '🎯 Spielfläche gestaltet',
        '⚙️ Skripte für Bewegung, Schiessen, Kollision',
        '📱 Menüs eingebaut',
        '🔄 Feedback gesammelt',
        '🛠️ Fehlerbehebung, Design, Soundeffekte',
        '📋 Dokumentation und Präsentation vorbereitet'
      ],
      images: [
        'https://i.imgur.com/AIYSfjK.png',
        'https://i.imgur.com/OTa7mpq.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    },
    {
      type: 'content',
      title: 'HIGHLIGHTS & SCHWIERIGKEITEN',
      subtitle: 'Erfolge und Herausforderungen',
      content: [
        '🎉 HIGHLIGHTS:',
        '• Erster spielbarer Prototyp',
        '• Eigener Lernfortschritt mit Unity und C#',
        '• Positives Feedback von Mitschülern',
        '',
        '⚠️ SCHWIERIGKEITEN:',
        '• Schuss-Cooldown korrekt umsetzen',
        '• Kombination von Spiellogik und UI',
        '• Ideensuche'
      ],
      images: [
        'https://i.imgur.com/hEaiafe.png',
        'https://i.imgur.com/z4CsIQm.jpeg'
      ]
    },
    {
      type: 'content',
      title: 'REFLEXION DER ZIELE',
      subtitle: 'Erkenntnisse und Lernerfahrungen',
      content: [
        '',
        '🎯 Technische Herausforderungen gemeistert',
        '',
        '',
        '',
        '',
        '📈 Kontinuierliche Verbesserung durch Rückmeldungen',
        '',
        '',
        '',
        '',
        '🎮 Tieferes Verständnis für Spielmechaniken entwickelt'
      ],
      images: [
        'https://i.imgur.com/EAhSpof.png',
        'https://i.imgur.com/Kuj5xFi.png'
      ]
    },
    {
      type: 'content',
      title: 'FAZIT',
      subtitle: 'Projektergebnis',
      content: [
        '✅ Spiel läuft ohne Fehler',
        '🎯 Ideen erfolgreich umgesetzt',
        '🎮 Spiel macht Spass, wird mit der Zeit schwieriger',
        '📚 Viel gelernt: Unity, Mechaniken, Fehlerbehebung',
        '🔄 Rückmeldungen aktiv genutzt zur Verbesserung',
        '',
        '',
        '✅ Erfolgreiches Projekt 🎉'
      ],
      images: [
        'https://i.imgur.com/9i8milB.png',
        'https://i.imgur.com/LdmfvEz.png'
      ]
    },
    {
      type: 'title',
      title: 'ENDE DER PRÄSENTATION',
      subtitle: 'Vielen Dank fürs Zuhören',
      content: null,
      images: ['https://i.imgur.com/zQ4RG2j.jpeg']
    },
    // NEUE FOLIE: Titel + 2 große Bilder, kein Text
    {
      type: 'big-images',
      title: 'ZWEI BILDER',
      subtitle: '',
      content: null,
      images: [
        'https://i.imgur.com/48BeYyx.png',
        'https://i.imgur.com/AIYSfjK.png'
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {stars.map(star => (
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
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 border-2 flex-shrink-0 ${idx === currentSlide ? 'bg-cyan-400 border-cyan-400' : 'bg-transparent border-gray-500'} hover:border-cyan-400 transition-colors`}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'}`}
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-5xl w-full mx-8 h-full flex items-center">
            {currentSlideData.type === 'title' && (
              <div className="text-center space-y-6 w-full flex flex-col items-center">
                <div className="space-y-4">
                  <div className={`pixel-font font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 text-6xl`}>
                    {currentSlideData.title}
                  </div>
                  <div className="pixel-font text-lg text-gray-200">{currentSlideData.subtitle}</div>
                </div>
                {currentSlideData.images && currentSlideData.images.length > 0 && (
                  <img src={currentSlideData.images[0]} alt="Titelbild" className="max-w-full max-h-96 object-contain rounded-md border-4 border-cyan-400" />
                )}
              </div>
            )}

            {currentSlideData.type === 'menu' && (
              <div className="w-full flex flex-col items-center space-y-2">
                <div className="pixel-font font-bold text-4xl text-cyan-400">{currentSlideData.title}</div>
                <div className="pixel-font text-xl text-gray-300 max-w-md">
                  {currentSlideData.content?.map((item, idx) => (
                    <div key={idx} className="hover:text-yellow-400 cursor-pointer transition-colors py-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === 'content' && (
              <div className="max-w-5xl w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                <div className="flex-1 pixel-font text-cyan-300 text-lg whitespace-pre-line leading-relaxed">
                  {currentSlideData.content?.map((line, idx) => (
                    <div key={idx} className="mb-2">{line}</div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                  {currentSlideData.images?.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Bild ${idx + 1}`}
                      className="rounded-md border-4 border-cyan-400 max-h-72 object-contain"
                    />
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === 'big-images' && (
              <div className="w-full flex justify-center space-x-8">
                {currentSlideData.images?.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Großes Bild ${idx + 1}`}
                    className="max-w-1/2 max-h-[80vh] object-contain rounded-md border-4 border-cyan-400"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seitenzahl unten mittig */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pixel-font text-cyan-400 bg-black bg-opacity-60 px-4 py-1 rounded border-2 border-cyan-400 select-none">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default RetroSlideshow;
