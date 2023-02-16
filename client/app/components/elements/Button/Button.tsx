import { FC } from "react";
import cls from "./Button.module.scss";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button className={cn(cls.Button, {}, [className])} {...otherProps}>
      {children}
    </button>
  );
};
