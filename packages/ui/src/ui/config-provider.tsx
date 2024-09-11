import { FC, PropsWithChildren } from "react";
import { Toaster } from "./toast";
import { TooltipProvider } from "./tooltip";

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  )
}

export default ConfigProvider;
