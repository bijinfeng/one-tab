import AddCircle from "@/assets/icons/addCircle.svg?react";
import { IconButton } from "@/components/IconButton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, cn } from "@pingtou/shadcn-ui";

import { useAppStore } from "@/store/app";
import { useSettingStore } from "@/store/setting";
import { useState } from "react";

export function SideDock() {
  const { categoryGroup } = useAppStore();
  const { leftBarDisplaySide, updateSetting } = useSettingStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group h-sidebar absolute top-1/2 -translate-y-1/2 pl-3">
      <div className="h-full home-sidedock icon-drop group glass-sidbar flex w-[52px] flex-col items-center rounded-[16px] bg-color-black bg-opacity-40 py-[8px]">
        <div className="shrink-0 cursor-pointer overflow-hidden rounded-[10px] bg-[rgba(255,255,255,0.4)] shadow-avatar">
          <img className="h-[36px] w-[36px]" src="/onetab.png" />
        </div>

        <div className="mt-[19px] h-[2px] w-[22px] shrink-0 rounded-[1px] bg-[rgba(0,0,0,0.15)]" />

        <div className="group relative w-full flex-grow py-4 space-y-2">
          {categoryGroup.map((item) => (
            <div key={item.id} className="flex justify-center">
              <IconButton size="huge" ghost>
                <i className={`${item.iconClass} iconfont text-[28px]`} />
              </IconButton>
            </div>
          ))}
        </div>

        <div className="mb-[16px] h-[2px] w-[22px] shrink-0 rounded-[1px] bg-[rgba(0,0,0,0.15)]" />

        <IconButton size="huge" ghost>
          <AddCircle width={28} height={28} />
        </IconButton>
      </div>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <IconButton
            size="small"
            ghost
            className={cn("absolute right-[14px] mt-1 opacity-0 group-hover:opacity-100", { "opacity-100": isOpen })}
          >
            <i className="iconfont icon-single_hover_icon text-[20px] text-color-white text-opacity-40" />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-24" side="right" align="start" sideOffset={20} collisionPadding={10}>
          <DropdownMenuItem>自动隐藏</DropdownMenuItem>
          <DropdownMenuItem>一直显示</DropdownMenuItem>
          <DropdownMenuItem>显示标题</DropdownMenuItem>
          {leftBarDisplaySide === "left" && (
            <DropdownMenuItem onClick={() => updateSetting({ leftBarDisplaySide: "right" })}>右侧</DropdownMenuItem>
          )}
          {leftBarDisplaySide === "right" && (
            <DropdownMenuItem onClick={() => updateSetting({ leftBarDisplaySide: "left" })}>左侧</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
