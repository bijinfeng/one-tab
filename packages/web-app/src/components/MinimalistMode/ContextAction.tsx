import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@pingtou/shadcn-ui";
import { FC, PropsWithChildren } from "react";

export const ContextAction: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-24">
        <ContextMenuItem>随机壁纸</ContextMenuItem>
        <ContextMenuItem>下载壁纸</ContextMenuItem>
        <ContextMenuItem>编辑常访栏</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
