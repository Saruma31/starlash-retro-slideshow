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
                  <div className="pixel-font text-4xl md:text-6xl lg:text-8xl text-cyan-400 drop-shadow-[0_0_10px_cyan]">
                    {currentSlideData.title}
                  </div>
                  {currentSlideData.subtitle && (
                    <div className="pixel-font text-xl md:text-2xl lg:text-4xl text-gray-300">
                      {currentSlideData.subtitle}
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentSlideData.type === 'menu' && (
              <div className="w-full">
                <div className="pixel-font text-3xl md:text-5xl text-cyan-400 mb-6">
                  {currentSlideData.title}
                </div>
                <ScrollArea className="h-64 bg-black bg-opacity-50 p-4 rounded-md border border-cyan-400">
                  <ul className="pixel-font text-lg md:text-xl space-y-2 list-disc list-inside text-gray-300">
                    {currentSlideData.content?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            )}

            {currentSlideData.type === 'content' && (
              <div className="w-full">
                <div className="pixel-font text-3xl md:text-5xl text-cyan-400 mb-6">
                  {currentSlideData.title}
                </div>
                {currentSlideData.subtitle && (
                  <div className="pixel-font text-xl md:text-2xl mb-4 text-gray-300">
                    {currentSlideData.subtitle}
                  </div>
                )}
                <ul className="pixel-font text-lg md:text-xl space-y-2 text-gray-300 list-disc list-inside">
                  {currentSlideData.content?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* HIER IST DER FOOTER-BEREICH MIT DEN BUTTONS GELÖSCHT */}

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
