// dépendence de base externe (clsx , UUIDV4)
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

// Dépendece interne (BOuton Links footer)
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}
export const SocialNetworkButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const icolist = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));
  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icolist}
    </div>
  );
};
