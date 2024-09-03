import { cn } from "@pingtou/shadcn-ui";
import { FC } from "react";

interface IUserCardProps {
  onClick?: () => void;
  actived?: boolean;
}

export const UserCard: FC<IUserCardProps> = ({ onClick, actived }) => {
  return (
    <div
      className={cn(
        "flex h-full items-center rounded-[6px] p-[12px] bg-opacity-90 dark:bg-opacity-10 cursor-pointer hover:bg-color-b3 hover:dark:bg-color-white",
        { "bg-color-b3 dark:bg-color-white": actived },
      )}
      onClick={onClick}
    >
      <div className="h-[40px] w-[40px] flex-shrink-0 overflow-hidden rounded-full">
        <i className="iconfont icon-dengdaisousuo text-[40px] text-color-t4 dark:text-color-t3 leading-none"></i>
      </div>
      <div className="flex flex-1 flex-col items-start overflow-hidden pl-[16px] pr-[10px]">
        <span className="w-full truncate font-ali-65 text-[13px] leading-[18px] text-[#4A7AFF]">登录/注册</span>
        <span className="mt-[1px] truncate font-ali-55 text-[12px] leading-[17px] text-color-t2">登录以同步数据</span>
      </div>
    </div>
  );
};
