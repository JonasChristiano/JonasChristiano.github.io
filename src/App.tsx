import { useState } from "react";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import pt from "./i18n/pt.json";
import en from "./i18n/en.json";
import type { Translations } from "./i18n/types/Translations";
import "./App.css";



const translations: Translations = {pt, en};

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>("pt");
  const t = translations[lang];

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <Menu t={t.navigation} lang={lang} setLang={setLang} />
      <div className="h-screen overflow-y-auto w-full">
        <Home t={t.home} />
        <About t={t.about} />
        <Project t={t.projects} />
      </div>
    </div>
  );
}

export default App;
