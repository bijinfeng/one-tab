import { IconButton } from "@/components/IconButton";
import { Dialog, DialogContent, DialogTrigger, Separator, cn } from "@pingtou/shadcn-ui";
import { useMount } from "ahooks";
import { useState } from "react";

import { events } from "@/events";
import { Setting as SettingIcon } from "@/icons";
import React from "react";
import packageJson from "../../../package.json";
import { BasicSetting } from "./BasicSetting";
import { EngineSetting } from "./EngineSetting";
import { ThemeSetting } from "./ThemeSetting";
import { Backup } from "./UserInfo/Backup";
import { UserCard } from "./UserInfo/UserCard";
import { WallpaperSetting } from "./WallpaperSetting";

const sidbarMaps = [
  {
    key: "basic",
    title: "基本",
    content: BasicSetting,
  },
  {
    key: "wallpaper",
    title: "壁纸",
    content: WallpaperSetting,
  },
  {
    key: "themes",
    title: "主题",
    content: ThemeSetting,
  },
  {
    key: "engines",
    title: "搜索引擎",
    content: EngineSetting,
  },
  {
    key: "messages",
    title: "消息通知",
  },
  {
    key: "abouts",
    title: "关于我们",
  },
];

export function Setting() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("");

  useMount(() => {
    events.on("openSetting", (key = "") => {
      setActiveKey(key);
      setOpen(true);
    });
  });

  const currentContent = sidbarMaps.find((item) => item.key === activeKey)?.content;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <IconButton size="huge" ghost className="home-setting-btn absolute left-[20px] bottom-[20px]">
          <SettingIcon width={28} height={28} />
        </IconButton>
      </DialogTrigger>
      <DialogContent className="flex w-[720px] max-w-[720px] h-[572px] max-h-[calc(100vh-88px)] p-0 overflow-hidden gap-0">
        <div className="flex h-full w-[220px] flex-col border-r-[1px] border-color-m2 border-opacity-[0.08] bg-color-b2 bg-opacity-95 setting-bar pointer-events-auto relative z-[-1]">
          <div className="py-[14px] px-[16px]">
            <UserCard onClick={() => setActiveKey("")} actived={activeKey === ""} />
          </div>
          <Separator className="bg-color-m2 bg-opacity-[0.08]" />
          <div className="relative max-h-[calc(100%-92px)] flex-1 px-[16px] pt-[32px] pb-[40px] space-y-1">
            {sidbarMaps.map((item) => (
              <button
                key={item.key}
                className={cn(
                  "h-[36px] w-full rounded-[6px] py-[8px] pl-[12px] text-left text-[14px] text-color-t2 duration-150 hover:bg-color-white hover:bg-opacity-90 hover:text-color-t1 not-last:mb-[4px] hover:dark:bg-opacity-10",
                  "outline-none",
                  {
                    "bg-color-white bg-opacity-90 text-color-t1  dark:bg-opacity-10": item.key === activeKey,
                  },
                )}
                onClick={() => setActiveKey(item.key)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="absolute left-[28px] bottom-[24px] flex items-center">
            <p className="font-ali-55 text-[12px] leading-[17px] text-color-t3">{packageJson.version}</p>
          </div>
        </div>

        <div className="hi-changes relative h-full changes-view flex-1 bg-color-b3 pointer-events-auto">
          {currentContent ? React.createElement(currentContent) : <Backup />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
