type Props = {
    lang: 'pt' | 'en';
    setLang: (lang: 'pt' | 'en') => void;
};

export default function LanguageSwitcher({ lang, setLang }: Props) {
    return (
        <div className="flex items-center space-x-1">
            <button
                className={`px-2 py-1 rounded ${lang === 'pt' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setLang('pt')}
            >
                🇧🇷 PT
            </button>
            <button
                className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setLang('en')}
            >
                🇺🇸 EN
            </button>
        </div>
    );
}