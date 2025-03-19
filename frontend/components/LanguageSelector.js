import { useState } from 'react';
const translations = {
    en: { welcome: "Welcome to Eatover", book: "Book a Meal", explore: "Explore Meals" },
    es: { welcome: "Bienvenido a Eatover", book: "Reservar una comida", explore: "Explorar comidas" },
    fr: { welcome: "Bienvenue sur Eatover", book: "Réserver un repas", explore: "Explorer les repas" }
};

export default function LanguageSelector() {
    const [lang, setLang] = useState('en');
    return (
        <div className='mb-4'>
            <select onChange={(e) => setLang(e.target.value)} className='px-4 py-2 border rounded-md shadow-sm'>
                <option value='en'>English</option>
                <option value='es'>Español</option>
                <option value='fr'>Français</option>
            </select>
            <h1 className='text-2xl font-semibold mt-2'>{translations[lang].welcome}</h1>
            <button className='mt-3 px-4 py-2 bg-indigo-500 text-white rounded-md'>{translations[lang].book}</button>
        </div>
    );
}