import { IconButton } from "@/components/IconButton";
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger, cn } from "@pingtou/shadcn-ui";
import { useHover } from "ahooks";
import { FC, useRef } from "react";

interface ICategoryItemProps {
  data: OneTab.AppCategory;
  showTitle: boolean;
}

export const CategoryItem: FC<ICategoryItemProps> = ({ data, showTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(containerRef);

  return (
    <Tooltip open={showTitle}>
      <TooltipTrigger asChild>
        <div ref={containerRef} className="group flex justify-center">
          <IconButton size="huge" ghost>
            <i className={`${data.iconClass} iconfont text-[28px] leading-none`} />
          </IconButton>
        </div>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          side="right"
          className={cn("text-white pl-1 pr-2 bg-transparent py-0 !leading-6 text-xs font-medium rounded", {
            "bg-white text-color-t2 pl-2": isHover,
          })}
        >
          <span className="max-w-20 overflow-hidden text-ellipsis whitespace-nowrap">{data.name}</span>
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
};
