import React, { FC, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import cn from "classnames";
import Link, { LinkProps } from "next/link";
export enum AppLinkTheme {
  ORANGE = "orange",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const Applink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    href,
    className,
    children,
    theme = AppLinkTheme.ORANGE,
    ...otherProps
  } = props;
  return (
    <Link href={href}>
      <a
        className={cn(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </a>
    </Link>
  );
};
