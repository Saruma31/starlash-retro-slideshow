// RetroSlideshow.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

type Slide = {
  type: string;
  title: string;
  subtitle: string;
  content: string[] | null;
  images: string[];
};

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
          size: Math.random() * 3 + 1
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const slides: Slide[] = [
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
        '🎮 Raumschiff steuern, Asteroiden zerstören',
        '🌟 Power-Ups, Lebenssystem, Punktesystem',
        '🎨 Eigenes Design',
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
        '⚙️ Skripte für Bewegung, Schießen, Kollision',
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
        '🎯 Technische Herausforderungen gemeistert',
        '📈 Kontinuierliche Verbesserung durch Rückmeldungen',
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
        '🎮 Spiel macht Spaß, wird mit der Zeit schwieriger',
        '📚 Viel gelernt: Unity, Mechaniken, Fehlerbehebung',
        '🔄 Rückmeldungen aktiv genutzt zur Verbesserung',
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
    }
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white font-mono">
      {/* Sterne-Hintergrund */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`
            }}
          />
        ))}
      </div>

      {/* Inhalt der Folie */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 drop-shadow-lg mb-4">
          {slides[currentSlide].title}
        </h1>
        {slides[currentSlide].subtitle && (
          <h2 className="text-xl md:text-2xl text-pink-400 mb-6">
            {slides[currentSlide].subtitle}
          </h2>
        )}
        {slides[currentSlide].content && (
          <ScrollArea className="max-h-60 w-full max-w-xl mb-6 px-4">
            <div className="space-y-2 text-left text-lg leading-relaxed text-white">
              {slides[currentSlide].content.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </ScrollArea>
        )}
        {slides[currentSlide].images.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {slides[currentSlide].images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${currentSlide + 1} Image ${idx + 1}`}
                className="w-60 h-auto rounded-xl border-2 border-white shadow-lg"
              />
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="absolute bottom-8 flex justify-between w-full px-8 items-center">
          <button
            className="text-white hover:text-cyan-400 transition"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev > 0 ? prev - 1 : slides.length - 1
              )
            }
          >
            <ChevronLeft size={36} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  currentSlide === index ? 'bg-cyan-400' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
          <button
            className="text-white hover:text-cyan-400 transition"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev < slides.length - 1 ? prev + 1 : 0
              )
            }
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetroSlideshow;
