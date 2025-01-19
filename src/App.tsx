import React from 'react';
import portfolioData from './data/portfolio.json';
import Header from './components/Header';
import Hero from './components/Hero';
import DynamicSection from './components/DynamicSection';

export default function App() {
  const availableSections = Object.entries(portfolioData).filter(([key, value]) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value && Object.keys(value).length > 0;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {portfolioData.profile && <Header profile={portfolioData.profile} />}
      <main>
        {portfolioData.profile && <Hero profile={portfolioData.profile} />}
        {availableSections.map(([sectionKey, sectionData]) => {
          if (sectionKey === 'profile') return null;
          
          return (
            <DynamicSection
              key={sectionKey}
              sectionKey={sectionKey}
              data={sectionData}
            />
          );
        })}
      </main>
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} {portfolioData.profile?.name || 'Portfolio'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}