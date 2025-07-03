import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  t: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
};

export default function Menu({ t, lang, setLang }: Props) {
    return (
        <div className="flex flex-col items-center w-64 p-4 bg-gray-300 text-gray-800">
            <div className="flex flex-col justify-center items-center mb-6 border-b w-full ">
              <img className='rounded-full size-18 bg-gray-800' src="vite.svg" alt="Image from Jonas Christiano" />
              <h1 className='text-sm font-bold text-center mt-4'>
                Jonas Christiano
              </h1>
              
            </div>
            <nav className="flex flex-col space-y-4">
                <a href="#home" className="hover:underline">{t.home}</a>
                <a href="#about" className="hover:underline">{t.about}</a>
                <a href="#projects" className="hover:underline">{t.projects}</a>
                <a href="#contact" className="hover:underline">{t.contact}</a>
            </nav>
            <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
    );
}