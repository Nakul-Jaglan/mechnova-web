'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Import translation files
import enTranslations from './translations-en.json';
import esTranslations from './translations-es.json';

const translations = {
  en: enTranslations,
  es: esTranslations
};

// List of country codes for Mexico, Central America, and South America
const SPANISH_COUNTRIES = [
  'MX', // Mexico
  'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', // Central America
  'CO', 'EC', 'PE', 'BO', 'CL', 'AR', 'PY', 'UY', 'BR', 'VE', 'GY', 'SR', 'GF' // South America
];

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState('es'); // Default to Spanish
  const [isLoading, setIsLoading] = useState(true);

  // Detect user's country and set initial locale
  useEffect(() => {
    const detectLocale = async () => {
      try {
        // Check if user has a saved preference
        const savedLocale = localStorage.getItem('mechnova-locale');
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
          setLocale(savedLocale);
          setIsLoading(false);
          return;
        }

        // Try to detect country using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/', {
          timeout: 3000
        });
        
        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          
          // If user is NOT in Spanish-speaking countries, set to English
          if (countryCode && !SPANISH_COUNTRIES.includes(countryCode)) {
            setLocale('en');
          }
          // Otherwise keep Spanish (default)
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to Spanish');
        // Keep Spanish as default if detection fails
      }
      
      setIsLoading(false);
    };

    detectLocale();
  }, []);

  // Save locale preference when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('mechnova-locale', locale);
    }
  }, [locale, isLoading]);

  const switchLocale = () => {
    setLocale(prev => prev === 'en' ? 'es' : 'en');
  };

  // Helper function to get nested translation
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        let fallback = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key; // Return key itself if no translation found
          }
        }
        return fallback;
      }
    }
    
    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ 
      locale, 
      setLocale, 
      switchLocale, 
      t, 
      isLoading 
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
