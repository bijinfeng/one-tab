import { useSettingStore } from "@/store/setting";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, cn } from "@pingtou/shadcn-ui";
import { useHover } from "ahooks";
import { useRef, useState, type FC } from "react";

import { IconButton } from "@/components/IconButton";
import { useWidgets } from "./useWidgets";

export const Minimalist: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  const { minimalistMode, minimalistSwitchBtnStatus, updateSetting } = useSettingStore();
  const [swtichOpen, setSwitchOPen] = useState(false);
  const renderWidgets = useWidgets();

  return (
    <div
      className={cn("top-right-btns fixed right-0 top-0 flex items-center p-[14px] transition-all", {
        "opacity-0 hover:opacity-100": minimalistSwitchBtnStatus === "auto-hide",
        "opacity-100": swtichOpen,
      })}
    >
      <div
        className={cn("relative flex items-center rounded-[16px] bg-color-black bg-opacity-0 p-[8px] space-x-4", {
          "backdrop-blur-[20px] backdrop-saturate-150 bg-opacity-20": isHover || swtichOpen,
        })}
      >
        <DropdownMenu open={swtichOpen} onOpenChange={setSwitchOPen} modal={false}>
          <DropdownMenuTrigger asChild>
            <IconButton
              ref={ref}
              size="large"
              ghost
              className={cn("rotate-90 opacity-0 hover:opacity-100", {
                "opacity-100": swtichOpen,
              })}
            >
              <i className="iconfont icon-single_hover_icon text-[20px]" />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24" align="start" side="left" sideOffset={20}>
            <DropdownMenuItem onClick={() => updateSetting({ minimalistSwitchBtnStatus: "auto-hide" })}>
              自动隐藏
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateSetting({ minimalistSwitchBtnStatus: "show" })}>
              一直显示
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {minimalistMode ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton size="large" ghost>
                  <i className="icon iconfont icon-deploy_icon text-[28px]" />
                </IconButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                collisionPadding={8}
                className="shadow-none border-none h-auto w-[340px] rounded-[20px] bg-color-white bg-opacity-40 p-[12px] backdrop-blur backdrop-saturate-150"
              >
                {renderWidgets()}
              </DropdownMenuContent>
            </DropdownMenu>
            <IconButton size="large" ghost onClick={() => updateSetting({ minimalistMode: false })}>
              <i className="icon iconfont icon-standard_icon text-[28px]" />
            </IconButton>
          </>
        ) : (
          <IconButton size="large" ghost onClick={() => updateSetting({ minimalistMode: true })}>
            <i className="icon iconfont icon-minimalism text-[28px]" />
          </IconButton>
        )}
      </div>
    </div>
  );
};
