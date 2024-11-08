import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ActiveLink } from "./active-link";
import Link from "next/link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div>
      <Container className="flex items-center justify-between py-4 gap-7 flex-wrap">
        {/* Logo et titre */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <div className="text-white font-extrabold text-[24px]">
              Servanty Matteo
            </div>
            <Typography variant="caption4" theme="gray" component="span">
              Alternant en Cyber / Dev
            </Typography>
          </div>
        </Link>

        {/* Menu de navigation et bouton */}
        <div className="flex items-center gap-7 flex-wrap justify-center">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7 text-center"
          >
            <ActiveLink href="/projects">Projects</ActiveLink>
            <Link href="/formations">Formations</Link>
            <Link href="/contact">Contact</Link>
            <ActiveLink href="/design-system">Compétence</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" baseUrl="/connexion/">
              Connexion
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
