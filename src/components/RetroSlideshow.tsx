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
                  <div className={`pixel-font font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse ${
                    currentSlide === slides.length - 1
                      ? 'text-3xl md:text-4xl lg:text-5xl'
                      : 'text-4xl md:text-6xl lg:text-7xl'
                  }`}>
                    {currentSlideData.title}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl text-cyan-300 pixel-font">
                    {currentSlideData.subtitle}
                  </div>
                </div>
                {currentSlide === slides.length - 1 && currentSlideData.images?.[0] && (
                  <img
                    src={currentSlideData.images[0]}
                    alt="Dankesbild"
                    className="mt-6 h-[60vh] w-auto object-contain border-2 border-cyan-400 rounded-xl shadow-lg"
                  />
                )}
                <div className="flex justify-center space-x-8">
                  <div className="text-4xl md:text-6xl animate-bounce">🚀</div>
                  <div className="text-4xl md:text-6xl animate-bounce delay-100">⭐</div>
                  <div className="text-4xl md:text-6xl animate-bounce delay-200">👾</div>
                </div>
              </div>
            )}

            {currentSlideData.type === 'menu' && (
              <div className="space-y-6 w-full h-full flex flex-col">
                <div className="text-center flex-shrink-0">
                  <h1 className="pixel-font text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
                    {currentSlideData.title}
                  </h1>
                </div>
                <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-6 rounded-lg flex-1">
                  <ScrollArea className="h-full">
                    <div className="space-y-3">
                      {currentSlideData.content?.map((item, i) => (
                        <div
                          key={i}
                          className="pixel-font text-lg md:text-xl lg:text-2xl text-white hover:text-cyan-400 transition-colors cursor-pointer flex items-center space-x-4 p-2 hover:bg-cyan-400 hover:bg-opacity-10 rounded"
                          onClick={() => goToSlide(i + 2)}
                        >
                          <Zap className="text-yellow-400 flex-shrink-0" size={20} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            )}

            {currentSlideData.type === 'content' && (
              <div className="space-y-4 w-full h-full flex flex-col">
                <div className="text-center flex-shrink-0">
                  <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                    {currentSlideData.title}
                  </h1>
                  <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                    {currentSlideData.subtitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start flex-1">
                  <div className="col-span-2 bg-black bg-opacity-70 border-4 border-cyan-400 p-4 md:p-6 rounded-lg h-full">
                    <ScrollArea className="h-full">
                      <div className="space-y-2 pr-4">
                        {currentSlideData.content?.map((item, i) => (
                          <div
                            key={i}
                            className={`pixel-font ${
                              item.startsWith('🎉') || item.startsWith('⚠️')
                                ? 'text-yellow-400 font-bold text-lg md:text-xl lg:text-2xl'
                                : item.startsWith('•')
                                ? 'text-cyan-300 ml-4 md:ml-6 text-sm md:text-base lg:text-lg'
                                : item === ''
                                ? 'h-2'
                                : 'text-white text-sm md:text-base lg:text-lg'
                            } leading-relaxed break-words`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>


                  <div className="flex flex-col gap-4">
                    {(currentSlideData.images || []).length > 0 ? (
                      currentSlideData.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Bild ${idx + 1}`}
                          className="w-full aspect-video object-cover border-2 border-cyan-400 rounded-lg"
                        />
                      ))
                    ) : (
                      <div className="text-cyan-400 pixel-font">Keine Bilder vorhanden</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.type === 'big-images' && (
  <div className="flex flex-col flex-1 w-full justify-center space-y-4 p-4">
    <h2 className="pixel-font text-3xl font-bold text-cyan-400 text-center">
      ZWEI BILDER
    </h2>
    <div className="flex w-full justify-center space-x-2">
      {currentSlideData.images?.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Großes Bild ${idx + 1}`}
          className="w-[49%] h-auto object-contain border-4 border-cyan-400 rounded-lg"
        />
      ))}
    </div>
  </div>
)}

          </div>
        </div>
      </div>
<div className="absolute bottom-0 w-full text-center py-2 bg-black bg-opacity-50 border-t-2 border-cyan-400 z-20">
  <span className="pixel-font text-cyan-300 text-sm">
    {currentSlide + 1} / {slides.length}
  </span>
</div>
    </div>
  );
};

export default RetroSlideshow;
