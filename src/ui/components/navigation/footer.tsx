import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { footerLinks } from "@/types/appLinks";
import { FooterLinks } from "./app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworkButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = FooterLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks}></FooterLink>
  ));

  return (
    <div className="bg-gray">
      <Container className="flex flex-col sm:flex-row justify-between pt-16 space-y-12 sm:space-y-0 sm:gap-7">
        {/* Section Lycee */}
        <div className="flex flex-col items-center sm:items-start">
          <Typography variant="caption1" theme="white" weight="medium">
            Portofolio de Servany Matteo
          </Typography>
          <Typography variant="caption3" theme="gray">
            En rechercher d'alternance
          </Typography>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
          {footerNavigationList}
        </div>
      </Container>

      {/* Footer Bottom Section */}
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Typography
            variant="caption4"
            theme="gray"
            className="text-center sm:text-left"
          >
            {`Copyright © ${currentYear}|  `}{" "}
            <a
              href="https://gitlab.com/bacciel/front-end"
              target="blank"
              className="underline"
            >{`Servanty Matteo`}</a>
          </Typography>
          <div className="mt-4 sm:mt-0">
            <SocialNetworkButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface FooterLinkProps {
  data: footerLinks;
}

const FooterLink = ({ data }: FooterLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography
        theme="gray"
        variant="caption3"
        weight="regular"
        className="space-y-4"
      >
        {linkList}
      </Typography>
    </div>
  );
};
