import { CompetenceView } from "./components/compétences/competence-view";
import { ExperienceView } from "./components/experience/experience.view";
import { HeroTopView } from "./components/hero-top.tsx/hero-top.view";

export const LandigPageView = () => {
  return (
    <>
      <HeroTopView />
      <CompetenceView />
      <ExperienceView />
    </>
  );
};
