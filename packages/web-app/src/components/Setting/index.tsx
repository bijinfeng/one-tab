import { IconButton } from "@/components/IconButton";
import { Dialog, DialogContent, DialogTrigger, cn } from "@pingtou/shadcn-ui";
import { useMount } from "ahooks";
import { first } from "lodash-es";
import { useState } from "react";

import SettingIcon from "@/assets/icons/setting.svg?react";
import { events } from "@/events";
import packageJson from "../../../package.json";

const sidbarMaps = [
  {
    key: "basic",
    title: "基本",
  },
  {
    key: "wallpaper",
    title: "壁纸",
  },
  {
    key: "themes",
    title: "主题",
  },
  {
    key: "engines",
    title: "搜索引擎",
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

const DEFAULT_ACTIVE_KEY = first(sidbarMaps)?.key;

export function Setting() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(DEFAULT_ACTIVE_KEY);

  useMount(() => {
    events.on("openSetting", (key = DEFAULT_ACTIVE_KEY) => {
      setActiveKey(key);
      setOpen(true);
    });
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <IconButton
          size="huge"
          ghost
          className="home-setting-btn absolute left-[20px] bottom-[20px]"
        >
          <SettingIcon />
        </IconButton>
      </DialogTrigger>
      <DialogContent className="w-[720px] max-w-[720px] h-[572px] max-h-[calc(100vh-88px)] p-0 overflow-hidden">
        <div className="flex h-full w-[220px] flex-col border-r-[1px] border-color-m2 border-opacity-[0.08] bg-color-b2 bg-opacity-95 setting-bar pointer-events-auto relative z-[-1]">
          <div className="relative max-h-[calc(100%-92px)] flex-1 px-[16px] pt-[32px] pb-[40px] space-y-1">
            {sidbarMaps.map((item) => (
              <button
                key={item.key}
                className={cn(
                  "h-[36px] w-full rounded-[6px] py-[8px] pl-[12px] text-left text-[14px] text-color-t2 duration-150 hover:bg-color-white hover:bg-opacity-90 hover:text-color-t1 not-last:mb-[4px] hover:dark:bg-opacity-10",
                  {
                    "bg-color-white bg-opacity-90 text-color-t1  dark:bg-opacity-10":
                      item.key === activeKey,
                  },
                )}
                onClick={() => setActiveKey(item.key)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="absolute left-[28px] bottom-[24px] flex items-center">
            <p className="font-ali-55 text-[12px] leading-[17px] text-color-t3">
              {packageJson.version}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}