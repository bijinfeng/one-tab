import React, { CSSProperties, FC, PropsWithChildren } from "react";
import { TooltipContent, TooltipPortal, Tooltip as TooltipPrimitive, TooltipTrigger } from "./tooltip";

export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive> {
  title?: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "start" | "end";
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = (props) => {
  const { title, children, side, align, overlayClassName, overlayStyle, ...rest } = props;

  return (
    <TooltipPrimitive {...rest}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent align={align} side={side} className={overlayClassName} style={overlayStyle}>
          {title}
        </TooltipContent>
      </TooltipPortal>
    </TooltipPrimitive>
  )
}

export { TooltipProvider } from "./tooltip";
