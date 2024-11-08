import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
  imagePath: string;
  imagteAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/asset/svg/formation.svg",
    imagteAlt: "Illustration de deux personnes étant en train de discuter",
    title: "Dévellopement web",
    description: "Tailwind CSS, Typescript, Wordpress ...",
  },
  {
    imagePath: "/asset/svg/contact.svg",
    imagteAlt: "Illustration",
    title: "Réseaux",
    description: "Création / Gestion de réseaux",
  },
  {
    imagePath: "/asset/svg/poursuite.svg",
    imagteAlt:
      "Illustration d'une personne faisant des recherches sur un ordinateur",
    title: "Maintenance",
    description: "Maintenance de site internet, et de materiels informatiques",
  },
  {
    imagePath: "/asset/svg/ressources.svg",
    imagteAlt: "Illustration",
    title: "Cybersécurité",
    description: "débutant sur root-me / TryHackMe",
  },
];

export const CompetenceView = () => {
  const featuredList = featuresData.map((features) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-primary rounded p-6 transition-all hover:bg-opacity-80"
    >
      <div className="relative w-[130px] h-[130px] rounded mb-4">
        <Image
          fill
          src={features.imagePath}
          alt={features.imagteAlt}
          className="object-contain blur-2xl"
        />
        <Image
          fill
          src={features.imagePath}
          alt={features.imagteAlt}
          className="object-contain"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2"
      >
        {features.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {features.description}
      </Typography>
    </div>
  ));

  return (
    <div>
      <Container className="py-16">
        <div className="text-center space-y-8">
          <Typography className="text-center" variant="h2" theme="white">
            Compétences
          </Typography>
          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="mb-6"
          >
            Le bac pro CIEL, une filière connectée qui forme aux métiers du
            numérique. Découvrez notre filière de formation professionnelle qui
            offre de nombreux débouchés professionnels.
          </Typography>
        </div>
      </Container>
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
        {featuredList}
      </Container>
    </div>
  );
};
