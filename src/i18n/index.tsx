import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptProjects from "./pt/projectsInfo.json";
import ptSection from "./pt/sections.json";
// import enProjects from "./en/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    // en: {
    //   projects: enProjects
    // },
    pt: {
        home: ptSection.home,
        about: ptSection.about,
        contact: ptSection.contact,
        projects: ptProjects
    }
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["projects"],
  defaultNS: "projects",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
