import clsx from "clsx";

// Chargement
import { Spinner } from "../spinner/spinner";

// typage des liens (interne, externe)
import { LinkTypes } from "@/lib/link-type";

// Liens interne via react
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outlines" | "disabled" | "ico";
  icon?: any;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: string;
  action?: Function;
  type?: "button" | "submit";
  fullWith?: boolean;
  className?: string;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  type = "button",
  fullWith,
  className,
  action = () => {},
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": // Default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/75 text-primary rounded";
      break;
    case "outlines":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/75 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      break;
    case "medium": // Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      break;
  }

  const handlClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant == "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition == "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition == "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyles,
        sizeStyles,
        icoSize,
        isLoading && "cursor-wait",
        fullWith && "w-full",
        className,
        "relative animate"
      )}
      onClick={handlClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
  if (baseUrl) {
    if (linkType == LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }

  return buttonElement;
};
