
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const RetroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    // Generate random stars for background
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
      image: null,
      layout: 'center'
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
      image: null,
      layout: 'center'
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
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      layout: 'split-right'
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
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      layout: 'split-left'
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      layout: 'overlay-bottom'
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
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      layout: 'overlay-top'
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
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      layout: 'center-with-bg'
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
      ],
      image: null,
      layout: 'grid-layout'
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
      ],
      image: null,
      layout: 'cards-layout'
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
      ],
      image: null,
      layout: 'timeline-layout'
    },
    {
      type: 'content',
      title: 'PLATZHALTER 1',
      subtitle: 'Weitere Inhalte',
      content: [
        '📝 Hier können weitere Inhalte eingefügt werden',
        '🎯 Zusätzliche Projektdetails',
        '📊 Weitere Analysen und Erkenntnisse',
        '🔍 Detaillierte Betrachtungen',
        '💡 Neue Ideen und Konzepte'
      ],
      image: null,
      layout: 'center'
    },
    {
      type: 'content',
      title: 'PLATZHALTER 2',
      subtitle: 'Ergänzende Informationen',
      content: [
        '🌟 Ergänzende Projektinformationen',
        '📈 Weitere Entwicklungsschritte',
        '🎨 Design-Entscheidungen',
        '⚡ Performance-Verbesserungen',
        '🔮 Zukünftige Planungen'
      ],
      image: null,
      layout: 'center'
    },
    {
      type: 'content',
      title: 'PLATZHALTER 3',
      subtitle: 'Abschließende Gedanken',
      content: [
        '✨ Abschließende Betrachtungen',
        '🎯 Lessons Learned',
        '💪 Persönliche Entwicklung',
        '🚀 Nächste Projekte',
        '🌈 Ausblick in die Zukunft'
      ],
      image: null,
      layout: 'center'
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

  const renderContentLayout = () => {
    const { layout, content, title, subtitle, image } = currentSlideData;

    switch (layout) {
      case 'split-right':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            <div className="space-y-4">
              <div className="text-left">
                <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                  {title}
                </h1>
                <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                  {subtitle}
                </h2>
              </div>
              <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-4 rounded-lg flex-1">
                <ScrollArea className="h-64 lg:h-80">
                  <div className="space-y-2 pr-4">
                    {content?.map((item, index) => (
                      <div
                        key={index}
                        className="pixel-font text-white text-sm md:text-base leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={image} 
                alt="Projekt Bild" 
                className="max-w-full max-h-96 object-cover rounded-lg border-4 border-cyan-400 shadow-lg glow-animation"
              />
            </div>
          </div>
        );

      case 'split-left':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <img 
                src={image} 
                alt="Entwicklung Bild" 
                className="max-w-full max-h-96 object-cover rounded-lg border-4 border-cyan-400 shadow-lg glow-animation"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="text-left">
                <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                  {title}
                </h1>
                <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                  {subtitle}
                </h2>
              </div>
              <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-4 rounded-lg flex-1">
                <ScrollArea className="h-64 lg:h-80">
                  <div className="space-y-2 pr-4">
                    {content?.map((item, index) => (
                      <div
                        key={index}
                        className="pixel-font text-white text-sm md:text-base leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        );

      case 'overlay-bottom':
        return (
          <div className="relative h-full">
            {image && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            )}
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-center mb-4">
                <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                  {title}
                </h1>
                <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                  {subtitle}
                </h2>
              </div>
              <div className="flex-1 mt-auto">
                <div className="bg-black bg-opacity-90 border-4 border-cyan-400 p-4 rounded-lg">
                  <ScrollArea className="h-64">
                    <div className="space-y-2 pr-4">
                      {content?.map((item, index) => (
                        <div
                          key={index}
                          className={`pixel-font ${
                            item.startsWith('🎉') || item.startsWith('⚠️')
                              ? 'text-yellow-400 font-bold text-lg'
                              : item.startsWith('•')
                              ? 'text-cyan-300 ml-4 text-sm md:text-base'
                              : item === ''
                              ? 'h-2'
                              : 'text-white text-sm md:text-base'
                          } leading-relaxed`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        );

      case 'overlay-top':
        return (
          <div className="relative h-full">
            {image && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
              </div>
            )}
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-black bg-opacity-90 border-4 border-cyan-400 p-4 rounded-lg mb-4">
                <div className="text-center mb-4">
                  <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                    {title}
                  </h1>
                  <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                    {subtitle}
                  </h2>
                </div>
                <ScrollArea className="h-48">
                  <div className="space-y-2 pr-4">
                    {content?.map((item, index) => (
                      <div
                        key={index}
                        className="pixel-font text-white text-sm md:text-base leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        );

      case 'center-with-bg':
        return (
          <div className="relative h-full flex items-center justify-center">
            {image && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-black/80"></div>
              </div>
            )}
            <div className="relative z-10 max-w-4xl w-full">
              <div className="text-center mb-6">
                <h1 className="pixel-font text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
                  {title}
                </h1>
                <h2 className="pixel-font text-xl md:text-2xl lg:text-3xl text-pink-400">
                  {subtitle}
                </h2>
              </div>
              <div className="bg-black bg-opacity-80 border-4 border-cyan-400 p-6 rounded-lg">
                <ScrollArea className="h-64">
                  <div className="space-y-3 pr-4 text-center">
                    {content?.map((item, index) => (
                      <div
                        key={index}
                        className="pixel-font text-white text-lg md:text-xl leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        );

      case 'grid-layout':
        return (
          <div className="space-y-4 h-full">
            <div className="text-center">
              <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                {title}
              </h1>
              <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                {subtitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
              {content?.map((item, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-70 border-2 border-cyan-400 p-4 rounded-lg hover:border-pink-400 transition-colors"
                >
                  <div className="pixel-font text-white text-sm md:text-base text-center">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cards-layout':
        return (
          <div className="space-y-4 h-full">
            <div className="text-center">
              <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                {title}
              </h1>
              <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                {subtitle}
              </h2>
            </div>
            <div className="flex-1">
              <ScrollArea className="h-full">
                <div className="space-y-3 pr-4">
                  {content?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-cyan-400 p-4 rounded-lg transform hover:scale-105 transition-transform"
                    >
                      <div className="pixel-font text-white text-sm md:text-base leading-relaxed">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        );

      case 'timeline-layout':
        return (
          <div className="space-y-4 h-full">
            <div className="text-center">
              <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                {title}
              </h1>
              <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                {subtitle}
              </h2>
            </div>
            <div className="flex-1">
              <ScrollArea className="h-full">
                <div className="space-y-4 pr-4">
                  {content?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="pixel-font text-black font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="bg-black bg-opacity-70 border-2 border-cyan-400 p-3 rounded-lg flex-1">
                        <div className="pixel-font text-white text-sm md:text-base">
                          {item}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4 w-full h-full flex flex-col">
            <div className="text-center flex-shrink-0">
              <h1 className="pixel-font text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                {title}
              </h1>
              <h2 className="pixel-font text-lg md:text-xl lg:text-2xl text-pink-400">
                {subtitle}
              </h2>
            </div>
            <div className="bg-black bg-opacity-70 border-4 border-cyan-400 p-4 md:p-6 rounded-lg flex-1">
              <ScrollArea className="h-full">
                <div className="space-y-2 pr-4">
                  {content?.map((item, index) => (
                    <div
                      key={index}
                      className="pixel-font text-white text-sm md:text-base lg:text-lg leading-relaxed break-words"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated stars background */}
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

      {/* Slide content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="bg-black bg-opacity-50 border-b-4 border-cyan-400 p-4">
          <div className="flex justify-between items-center">
            <div className="pixel-font text-cyan-400 text-lg font-bold">
              RETRO GAMING PRESENTATION
            </div>
            <ScrollArea className="max-w-md">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 border-2 flex-shrink-0 ${
                      index === currentSlide
                        ? 'bg-cyan-400 border-cyan-400'
                        : 'bg-transparent border-gray-500'
                    } hover:border-cyan-400 transition-colors`}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Main content area with integrated navigation */}
        <div className="flex-1 flex items-center justify-center p-4 relative">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${
              currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 pixel-font bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 border-2 border-cyan-400 transition-all duration-200 ${
              currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-yellow-400 hover:shadow-lg glow-animation'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-6xl w-full mx-8 h-full flex items-center">
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

            {currentSlideData.type === 'content' && renderContentLayout()}
          </div>
        </div>

        {/* Bottom Navigation */}
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

      {/* Floating spaceship decoration */}
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
