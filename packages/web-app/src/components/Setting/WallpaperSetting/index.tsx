import { Tabs, TabsList, TabsTrigger } from "@pingtou/shadcn-ui";
import { FC } from "react";

export const WallpaperSetting: FC = () => {
  return (
    <Tabs defaultValue="default" className="pt-4 px-[40px]">
      <TabsList className="grid grid-cols-3 bg-color-white text-color-t2">
        <TabsTrigger value="default" className="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white">
          精选图片
        </TabsTrigger>
        <TabsTrigger value="custom" className="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white">
          动态壁纸
        </TabsTrigger>
        <TabsTrigger
          value="additional"
          className="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white"
        >
          渐变背景
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
