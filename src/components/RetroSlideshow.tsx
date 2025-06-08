'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
      '5. Fazit'
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
    subtitle: '',
    content: [
      '🛠️ Planung: Ideen sammeln, Design skizzieren',
      '👨‍💻 Programmierung: Schritt für Schritt Funktionen implementiert',
      '🎨 Gestaltung: Sprites, Hintergründe und Sounds integriert',
      '🧪 Testen: Fehler beheben und Performance optimieren',
      '📦 Verpackung: Spiel exportiert und dokumentiert'
    ]
  },
  {
    type: 'content',
    title: 'HIGHLIGHTS & SCHWIERIGKEITEN',
    subtitle: '',
    content: [
      '🎉 Highlights:',
      '• Eigene Grafiken & Power-Ups erfolgreich integriert',
      '• Spiel läuft flüssig und fehlerfrei',
      '',
      '⚠️ Schwierigkeiten:',
      '• Kollisionserkennung & Lebenssystem fehleranfällig',
      '• Zeitmanagement im Projektverlauf'
    ]
  },
  {
    type: 'content',
    title: 'REFLEXION DER ZIELE',
    subtitle: '',
    content: [
      '🎯 Ursprüngliche Ziele:',
      '• Eigenes Spiel mit Punktesystem und Design',
      '',
      '✅ Was erreicht wurde:',
      '• Funktionsfähiges Spiel mit UI, Power-Ups und Punktelogik',
      '• Selbstständiges Arbeiten mit Unity & C#',
      '',
      '🧠 Erkenntnisse:',
      '• Gute Planung ist entscheidend',
      '• C#-Logik & Unity-Komponenten besser verstanden'
    ]
  },
  {
    type: 'content',
    title: 'FAZIT',
    subtitle: '',
    content: [
      '🙌 Ich bin stolz auf das Ergebnis!',
      '• Viel gelernt über Spieleentwicklung und Projektarbeit',
      '• Herausforderungen gemeistert',
      '• Kreativität und Logik vereint',
      '',
      '🎮 DANKE FÜRS SPIELEN!'
    ]
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const slide = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 * direction }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 * direction }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full flex flex-col items-center justify-center p-4"
        >
          {slide.type === 'title' && (
            <>
              <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
              <h2 className="text-3xl italic text-gray-300">{slide.subtitle}</h2>
            </>
          )}

          {slide.type === 'menu' && (
            <>
              <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
              <ul className="space-y-4">
                {slide.content.map((item, index) => (
                  <li
                    key={index}
                    className="text-2xl cursor-pointer hover:text-blue-400 transition duration-300"
                    onClick={() => goToSlide(index + 2)} // +2 wegen Titelfolie und Inhaltsverzeichnis
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {slide.type === 'content' && (
            <>
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <h2 className="text-2xl text-gray-400 mb-4">{slide.subtitle}</h2>
              <ul className="space-y-2 text-xl max-w-3xl">
                {slide.content.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 flex space-x-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-500">
          Zurück
        </button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-500">
          Weiter
        </button>
      </div>
    </div>
  );
}
