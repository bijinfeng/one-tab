import { Tabs, TabsContent, TabsList, TabsTrigger } from "@pingtou/shadcn-ui";
import { FC } from "react";
import { CustomEngines } from "./CustomEngines";
import { DefaultEngines } from "./DefaultEngines";

export const EngineSetting: FC = () => {
  return (
    <Tabs defaultValue="default" className="pt-[40px]">
      <TabsList className="mx-[70px] grid grid-cols-3 bg-color-m2 bg-opacity-20 text-white">
        <TabsTrigger value="default">默认</TabsTrigger>
        <TabsTrigger value="custom">自定义</TabsTrigger>
        <TabsTrigger value="additional">附加</TabsTrigger>
      </TabsList>

      <TabsContent value="default" className="mt-5">
        <DefaultEngines />
      </TabsContent>
      <TabsContent value="custom" className="mt-5">
        <CustomEngines />
      </TabsContent>
    </Tabs>
  );
};
