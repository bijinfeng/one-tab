import { Button, Drawer, DrawerContent, DrawerTrigger } from "@pingtou/shadcn-ui";
import { FC } from "react";

export const CustomEngines: FC = () => {
  return (
    <div className="px-[70px]">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button className="w-full">添加</Button>
        </DrawerTrigger>

        <DrawerContent></DrawerContent>
      </Drawer>
    </div>
  );
};
