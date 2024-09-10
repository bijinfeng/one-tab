import { FC } from "react";

export const WindowControl: FC = () => {
  return (
    <div className="flex items-center">
      <div className="group flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330] mb:hidden">
        <i className="iconfont icon-close_window_icon text-[12px] text-color-white opacity-100"></i>
      </div>
    </div>
  );
};
