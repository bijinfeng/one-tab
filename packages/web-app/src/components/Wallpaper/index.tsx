import defaultWallpaper from "@/assets/wallpapers/image/default.webp";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@pingtou/shadcn-ui";

export function Wallpaper() {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="fixed w-full h-full bg-cover bg-center transition-wallpaper"
        style={{ backgroundImage: `url(${defaultWallpaper})` }}
      />

      <ContextMenuContent className="w-44">
        <ContextMenuItem>添加图标</ContextMenuItem>
        <ContextMenuItem>添加小组件</ContextMenuItem>
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
}
