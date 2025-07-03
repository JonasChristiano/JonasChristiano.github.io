import { useTranslation } from "react-i18next";
import { projects } from "../i18n/types/Project";
import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
  const { t } = useTranslation("projects");

  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">{t("sectionTitle")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const id = project.id;
          return (
            <ProjectCard
              key={id}
              project={{
                ...project,
                title: t(`${id}.title`),
                shortDescription: t(`${id}.shortDescription`),
                description: t(`${id}.fullDescription`)
              }}
              onClick={() => {/* modal handler */}}
            />
          );
        })}
      </div>
    </section>
  );
}
