import { appLinks } from "@/types/appLinks";
import { RiInstagramLine, RiLinkedinLine, RiYoutubeLine } from "react-icons/ri";

const footerApplicationLinks: appLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projects",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Design System",
    baseUrl: "/design-system",
    type: "internal",
  },
];
const footerUserLinks: appLinks[] = [
  {
    label: "Back-Office",
    baseUrl: "/#",
    type: "internal",
  },
];
const footerInformationLinks: appLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerSocialNetworksLinks: appLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/",
    type: "external",
    icon: RiYoutubeLine,
  },
  {
    label: "instagram",
    baseUrl: "https://instagram.com",
    type: "external",
    icon: RiInstagramLine,
  },
  {
    label: "LinkeDin",
    baseUrl: "https://instagram.com",
    type: "external",
    icon: RiLinkedinLine,
  },
];

export const FooterLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utlisateur",
    links: footerUserLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux Sociaux",
    links: footerSocialNetworksLinks,
  },
];
