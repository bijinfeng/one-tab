import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@pingtou/shadcn-ui";
import { FC, PropsWithChildren } from "react";

import { events } from "@/events";

export const ContextAction: FC<PropsWithChildren> = ({ children }) => {
  const handleAddWidget = () => {
    events.emit("addWidget");
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-44">
        <ContextMenuItem>添加图标</ContextMenuItem>
        <ContextMenuItem onClick={handleAddWidget}>添加小组件</ContextMenuItem>
        <ContextMenuItem>随机壁纸</ContextMenuItem>
        <ContextMenuItem>下载壁纸</ContextMenuItem>
        <ContextMenuItem>编辑主页</ContextMenuItem>
        <ContextMenuItem>
          搜索图标
          <ContextMenuShortcut>Ctrl + F</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
