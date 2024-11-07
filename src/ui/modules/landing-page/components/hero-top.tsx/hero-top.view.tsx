import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="grid grid-cols-12 gap-24 py-24">
      <div className="grid grid-cols-3 col-span-3 gap-10">
        <Image
          fill
          src=''
          alt='{features.imagteAlt}'
          className="object-scale-down"
        />
      </div>
      <div className="col-span-9">
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="mb-8"
        >
          Le bac pro CIEL, une filière connectée qui forme aux métiers du
          numérique.Découvrez notre filière de formation professionnelle qui
          offre de nombreux débouchés professionnels.
        </Typography></div>
    </Container>
  );
};
