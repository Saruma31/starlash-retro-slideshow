import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';

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
        '⚡ Mit Unity und C# entwickelt',
        '🎮 Spieler steuert ein Raumschiff, weicht Asteroiden aus und schießt sie ab',
        '🌟 Features: Lebenssystem, Punktesystem, Power-Ups, verschiedene Asteroiden',
        '🎨 Eigenes Design: Hintergrund, Raumschiff, Laser etc.',
        '✅ Spiel läuft stabil und ohne Fehler'
      ],
      images: [
        'https://via.placeholder.com/200x150?text=Raumschiff',
        'https://via.placeholder.com/200x150?text=Gameplay'
      ]
    },
    {
      type: 'content',
      title: 'ARBEITSSCHRITTE',
      subtitle: 'Entwicklungsprozess',
      content: [
        '💡 Projektidee festgelegt: Spielentwicklung mit Unity',
        '📚 Tutorials geschaut, Grundlagen gelernt',
        '🎯 Spielfläche gestaltet (Hintergrund, Raumschiff, Asteroiden)',
        '⚙️ Skripte erstellt: Bewegung, Schießen, Kollision',
        '📱 Menüs eingebaut: Start, Pause, Game Over',
        '🔄 Feedback gesammelt → neue Features eingebaut',
        '🛠️ Fehlerbehebung, Design angepasst, Soundeffekte ergänzt',
        '📋 Dokumentation und Präsentation vorbereitet'
      ],
      images: ['https://via.placeholder.com/200x150?text=Entwicklung']
    },
    {
      type: 'content',
      title: 'HIGHLIGHTS & SCHWIERIGKEITEN',
      subtitle: 'Erfolge und Herausforderungen',
      content: [
        '🎉 HIGHLIGHTS:',
        '• Erster spielbarer Prototyp',
        '• Eigener Lernfortschritt mit Unity und C#',
        '• Power-Up-System und verschiedene Gegnerarten',
        '• Positives Feedback von Mitschülern',
        '',
        '⚠️ SCHWIERIGKEITEN:',
        '• Schuss-Cooldown korrekt umsetzen',
        '• Kombination von Spiellogik und UI',
        '• Phasenweise Motivationsprobleme'
      ],
      images: []
    },
    {
      type: 'content',
      title: 'REFLEXION',
      subtitle: 'Erkenntnisse und Lernerfahrungen',
      content: [
        '🎯 Technische Herausforderungen gemeistert',
        '🔧 Schuss-Cooldown erfolgreich implementiert',
        '🖥️ UI-Integration mit Spiellogik verbunden',
        '💪 Motivationsprobleme durch Feedback überwunden',
        '📈 Kontinuierliche Verbesserung durch Rückmeldungen',
        '🎮 Tieferes Verständnis für Spielmechaniken entwickelt'
      ],
      images: ['https://via.placeholder.com/200x150?text=Reflexion']
    },
    {
      type: 'content',
      title: 'FAZIT',
      subtitle: 'Projektergebnis',
      content: [
        '✅ Spiel läuft stabil, ohne Bugs → Ziel erreicht',
        '🎯 Viele geplante Features erfolgreich umgesetzt',
        '🎮 Spiel macht Spaß, wird mit der Zeit schwieriger',
        '📚 Gelernt: Umgang mit Unity, Spielmechaniken, Fehlerbehebung',
        '🔄 Rückmeldungen aktiv genutzt zur Verbesserung',
        '',
        '🚀 MISSION ACCOMPLISHED! 🚀'
      ],
      images: ['https://via.placeholder.com/200x150?text=Fazit']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
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
        <div className="bg-black bg-opacity-50 border-b-4 border-cyan-400 p-4">
          <div className="flex justify-between items-center">
            <div className="pixel-font text-cyan-400 text-lg font-bold">
              RETRO GAMING PRESENTATION
            </div>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 border-2 ${
                    index === currentSlide
                      ? 'bg-cyan-400 border-cyan-400'
                      : 'bg-transparent border-gray-500'
                  } hover:border-cyan-400 transition-colors`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            {currentSlideData.type === 'title' && (
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="pixel-font text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse">
                    {currentSlideData.title}
                  </div>
                  <div className="text-2xl md:text-4xl text-cyan-300 pixel-font">
                    {currentSlideData.subtitle}
                  </div>
                </div>
                <div className="flex justify-center space-x-8">
                  <div className="text-6xl animate-bounce">🚀</div>
                  <div className="text-6xl animate-bounce delay-100">⭐</div>
                  <div className="text-6xl animate-bounce delay-200">👾</div>
                </div>
              </div>
            )}

            {currentSlideData.type === 'menu' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="pixel-font text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
                    {currentSlideData.title}
                  </h1>
                </div>
                <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-8 rounded-lg">
                  <div className="space-y-4">
                    {currentSlideData.content?.map((item, index) => (
                      <div
                        key={index}
                        className="pixel-font text-xl md:text-2xl text-white hover:text-cyan-400 transition-colors cursor-pointer flex items-center space-x-4 p-2 hover:bg-cyan-400 hover:bg-opacity-10 rounded"
                        onClick={() => goToSlide(index + 2)}
                      >
                        <Zap className="text-yellow-400" size={24} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.type === 'content' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="pixel-font text-4xl md:text-6xl font-bold text-cyan-400 mb-2">
                    {currentSlideData.title}
                  </h1>
                  <h2 className="pixel-font text-xl md:text-2xl text-pink-400">
                    {currentSlideData.subtitle}
                  </h2>
                </div>
                <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-8 rounded-lg flex flex-col md:flex-row gap-6">
                  {/* Textbereich */}
                  <div className="flex-1 space-y-3">
                    {currentSlideData.content?.map((item, index) => (
                      <div
                        key={index}
                        className={`pixel-font text-lg md:text-xl ${
                          item.startsWith('🎉') || item.startsWith('⚠️')
                            ? 'text-yellow-400 font-bold text-2xl'
                            : item.startsWith('•')
                            ? 'text-cyan-300 ml-6'
                            : item === ''
                            ? ''
                            : 'text-white'
                        } leading-relaxed`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Bilderbereich */}
                  {currentSlideData.images && currentSlideData.images.length > 0 && (
                    <div className="flex flex-col space-y-4 items-center">
                      {currentSlideData.images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Slide image ${i + 1}`}
                          className="w-[200px] h-auto border-2 border-cyan-400 rounded shadow-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-black bg-opacity-50 border-t-4 border-cyan-400 p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="pixel-font bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 border-2 border-white hover:border-cyan-400 transition-all flex items-center space-x-2"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} />
              <span>ZURÜCK</span>
            </button>

            <div className="pixel-font text-cyan-400 text-lg">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={nextSlide}
              className="pixel-font bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 border-2 border-white hover:border-cyan-400 transition-all flex items-center space-x-2"
              disabled={currentSlide === slides.length - 1}
            >
              <span>WEITER</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 text-4xl animate-bounce">🛸</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse">🌟</div>
    </div>
  );
};

export default RetroSlideshow;
