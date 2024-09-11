import { FC, PropsWithChildren } from "react";
import { Toaster } from "./toast";

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export default ConfigProvider;
