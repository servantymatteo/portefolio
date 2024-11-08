import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="grid grid-cols-1 gap-10 mb-32 mt-5 pt-16">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
        <div className="relative w-[300px] h-[150px] sm:w-[400px] sm:h-[150px]">
          <Image
            fill
            src="/asset/image/Memoji_Profile_Picture.png"
            alt="EEEEE"
            className="blur-2xl absolute sm:block hidden" // Masquer sur les écrans small et plus bas
          />
          <Image
            fill
            src="/asset/image/Memoji_Profile_Picture.png"
            alt="EEEEE"
            className="relative sm:block hidden" // Masquer sur les écrans small et plus bas
          />
        </div>
        <div className="flex flex-col space-y-0 sm:space-y-4 mt-4 sm:mt-0">
          <Typography variant="h3" className="font-normal" component="p">
            Je suis{" "}
            <span className="text-primary font-bold">Servanty Matteo</span>.
          </Typography>
          <Typography
            variant="h5"
            className="font-normal space-y-0"
            component="p"
          >
            Je suis à la recherche d'une{" "}
            <span className="text-primary font-bold">Alternance</span>.
          </Typography>
          <Typography
            variant="body-sm"
            className="w-full sm:w-[90%] pt-2.5"
            component="p"
          >
            Étudiant en première année à l'ESGI et passionné par les
            technologies numériques, je me spécialise dans les réseaux, le
            développement web et le cloud computing. Avec un parcours en Bac Pro
            Systèmes Numériques et une expérience en alternance chez Qirios, je
            combine mes compétences techniques avec une approche centrée sur
            l'utilisateur pour concevoir des solutions numériques efficaces,
            alliant performance et design.
          </Typography>
        </div>
      </div>
    </Container>
  );
};
