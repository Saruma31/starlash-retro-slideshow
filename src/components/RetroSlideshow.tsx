import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const RetroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
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
      images: [],
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
        '5. Fazit',
      ],
      images: [],
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
        '✅ Vorschau des Projekts',
      ],
      images: [
        'https://i.imgur.com/kHTWx7J.png',
        'https://i.imgur.com/48BeYyx.png',
      ],
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
        '📋 Dokumentation und Präsentation vorbereitet',
      ],
      images: [
        'https://i.imgur.com/AIYSfjK.png',
        'https://i.imgur.com/OTa7mpq.png',
      ],
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
        '• Ideensuche',
      ],
      images: [
        'https://i.imgur.com/hEaiafe.png',
        'https://i.imgur.com/z4CsIQm.jpeg',
      ],
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
        '🎮 Tieferes Verständnis für Spielmechaniken entwickelt',
      ],
      images: [
        'https://i.imgur.com/EAhSpof.png',
        'https://i.imgur.com/Kuj5xFi.png',
      ],
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
        '✅ Erfolgreiches Projekt 🎉',
      ],
      images: [
        'https://i.imgur.com/9i8milB.png',
        'https://i.imgur.com/LdmfvEz.png',
      ],
    },
    {
      type: 'images-only',
      title: 'ZUSÄTZLICHE FEATURES',
      subtitle: '',
      content: [],
      images: [
        'https://i.imgur.com/AIYSfjK.png',
        'https://i.imgur.com/LdmfvEz.png',
      ],
    },
    {
      type: 'title',
      title: 'ENDE DER PRÄSENTATION',
      subtitle: 'Vielen Dank fürs Zuhören',
      content: null,
      images: ['https://i.imgur.com/zQ4RG2j.jpeg'],
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Sterne-Hintergrund */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          <Star className="text-white opacity-70" size={star.size} />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
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
                    className={`w-3 h-3 border-2 flex-shrink-0 ${
                      idx === currentSlide
                        ? 'bg-cyan-400 border-cyan-400'
                        : 'bg-transparent border-gray-500'
                    } hover:border-cyan-400 transition-colors`}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Main Slide Bereich */}
        <div className="flex-1 flex items-center justify-center p-4 relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-yellow-400 hover:shadow-lg glow-animation'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${
              currentSlide === slides.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-yellow-400 hover:shadow-lg glow-animation'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-5xl w-full mx-8 h-full flex items-center justify-center">
            {/* TITLE */}
            {currentSlideData.type === 'title' && (
              <div className="text-center space-y-6 w-full flex flex-col items-center">
                <div className="space-y-4">
                  <div
                    className={`pixel-font font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse ${
                      currentSlide === slides.length - 1
                        ? 'text-3xl md:text-4xl lg:text-5xl'
                        : 'text-4xl md:text-6xl lg:text-7xl'
                    }`}
                  >
                    {currentSlideData.title}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl text-cyan-300 pixel-font">
                    {currentSlideData.subtitle}
                  </div>
                </div>
                {currentSlide === slides.length - 1 &&
                  currentSlideData.images?.[0] && (
                    <img
                      src={currentSlideData.images[0]}
                      alt="Dankesbild"
                      className="mt-6 h-[60vh] w-auto object-contain border-2 border-cyan-400 rounded-xl shadow-lg"
                    />
                  )}
                <div className="flex justify-center space-x-8">
                  <div className="text-4xl md:text-6xl animate-bounce">🚀</div>
                  <div className="text-4xl md:text-6xl animate-bounce delay-100">
                    ⭐
                  </div>
                  <div className="text-4xl md:text-6xl animate-bounce delay-200">
                    👾
                  </div>
                </div>
              </div>
            )}

            {/* MENU */}
            {currentSlideData.type === 'menu' && (
              <div className="w-full max-w-3xl text-center space-y-4">
                <h1 className="pixel-font text-4xl font-bold text-cyan-400">
                  {currentSlideData.title}
                </h1>
                <ul className="pixel-font text-xl text-cyan-200">
                  {currentSlideData.content?.map((item, idx) => (
                    <li key={idx} className="my-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CONTENT */}
            {currentSlideData.type === 'content' && (
              <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
                <div className="w-full md:w-1/2 space-y-3 text-cyan-200 pixel-font text-lg">
                  <h2 className="text-3xl font-bold text-cyan-400">
                    {currentSlideData.title}
                  </h2>
                  <h3 className="text-xl">{currentSlideData.subtitle}</h3>
                  {currentSlideData.content?.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-6 justify-center items-center">
                  {currentSlideData.images?.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Slide image ${idx + 1}`}
                      className="rounded-lg border-2 border-cyan-400 shadow-lg max-h-[50vh] object-contain"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* IMAGES-ONLY */}
            {currentSlideData.type === 'images-only' && (
              <div className="flex flex-col items-center text-white text-center w-full h-full">
                <h1 className="pixel-font text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-6">
                  {currentSlideData.title}
                </h1>
                <div className="flex justify-center gap-4 w-full px-4">
                  {currentSlideData.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className="w-1/2 h-[70vh] object-contain border-2 border-cyan-400 rounded-lg shadow-lg"
                      alt={`Images-only ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black bg-opacity-50 border-t-4 border-cyan-400 p-4">
          <div className="flex justify-center items-center">
            <div className="pixel-font text-cyan-400 text-lg">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>

      {/* Deko-Elemente */}
      <div className="absolute top-20 right-10 text-4xl animate-bounce">🛸</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse">🌟</div>
    </div>
  );
};

export default RetroSlideshow;
