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
    {
      type: 'title',
      title: 'STARLASH',
      subtitle: 'Ein selbst programmiertes Videospiel',
      content: null
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
        '6. Zusätzliche Features',
        '7. Technische Details',
        '8. Zukunftspläne'
      ]
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
        '• Power-Up-System und verschiedene Gegnerarten',
        '• Positives Feedback von Mitschülern',
        '',
        '⚠️ SCHWIERIGKEITEN:',
        '• Schuss-Cooldown korrekt umsetzen',
        '• Kombination von Spiellogik und UI',
        '• Phasenweise Motivationsprobleme'
      ]
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
      ]
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
      ]
    },
    {
      type: 'content',
      title: 'ZUSÄTZLICHE FEATURES',
      subtitle: 'Erweiterte Funktionen',
      content: [
        '🎨 Platzhalter-Inhalt für weitere Features',
        '🔮 Zukünftige Entwicklungen geplant',
        '⭐ Power-Up-Systeme erweitern',
        '🎵 Mehr Soundeffekte hinzufügen',
        '🏆 Highscore-System implementieren',
        '🌌 Neue Level-Designs erstellen'
      ]
    },
    {
      type: 'content',
      title: 'TECHNISCHE DETAILS',
      subtitle: 'Entwicklungsaspekte',
      content: [
        '💻 Code-Architektur und Struktur',
        '🔧 Verwendete Design-Patterns',
        '📊 Performance-Optimierungen',
        '🐛 Debugging-Strategien',
        '📝 Dokumentations-Standards',
        '🔄 Versionskontrolle mit Git',
        '🧪 Testing-Methoden'
      ]
    },
    {
      type: 'content',
      title: 'ZUKUNFTSPLÄNE',
      subtitle: 'Nächste Schritte',
      content: [
        '🚀 Mobile Version entwickeln',
        '🌐 Multiplayer-Funktionen hinzufügen',
        '🎮 VR-Support implementieren',
        '🏪 Steam-Veröffentlichung planen',
        '👥 Community-Features einbauen',
        '📱 Cross-Platform-Kompatibilität',
        '🎯 E-Sports-Turnier-Modus'
      ]
    }
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
            {currentSlideData.type === 'title' && (
              <div className="text-center space-y-6 w-full">
                <div className="space-y-4">
                  <div className="pixel-font text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse">
                    {currentSlideData.title}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl text-cyan-300 pixel-font">
                    {currentSlideData.subtitle}
                  </div>
                </div>
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
                      {currentSlideData.content?.map((item, index) => (
                        <div
                          key={index}
                          className="pixel-font text-lg md:text-xl lg:text-2xl text-white hover:text-cyan-400 transition-colors cursor-pointer flex items-center space-x-4 p-2 hover:bg-cyan-400 hover:bg-opacity-10 rounded"
                          onClick={() => goToSlide(index + 2)}
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
                        {currentSlideData.content?.map((item, index) => (
                          <div
                            key={index}
                            className={`pixel-font ${item.startsWith('🎉') || item.startsWith('⚠️') ? 'text-yellow-400 font-bold text-lg md:text-xl lg:text-2xl' : item.startsWith('•') ? 'text-cyan-300 ml-4 md:ml-6 text-sm md:text-base lg:text-lg' : item === '' ? 'h-2' : 'text-white text-sm md:text-base lg:text-lg'} leading-relaxed break-words`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="w-full aspect-video bg-cyan-950 border-2 border-cyan-400 rounded-lg flex items-center justify-center text-cyan-300">Bild 1</div>
                    <div className="w-full aspect-video bg-cyan-950 border-2 border-cyan-400 rounded-lg flex items-center justify-center text-cyan-300">Bild 2</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-black bg-opacity-50 border-t-4 border-cyan-400 p-4">
          <div className="flex justify-center items-center">
            <div className="pixel-font text-cyan-400 text-lg">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
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
