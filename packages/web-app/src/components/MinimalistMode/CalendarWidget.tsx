import { useSettingStore } from "@/store/setting";
import dayjs from "dayjs";
import lunar from "dayjs-lunar";
import "dayjs/locale/zh-cn";

dayjs.extend(lunar);

// 设置全局语言环境为中文
dayjs.locale("zh-cn");

export const CalendarWidget = () => {
  const { showChineseCalendar } = useSettingStore();
  const now = dayjs();

  return (
    <p className="absolute top-[calc(28.5vh+128px)] font-mind-regular text-[32px] leading-[39px] text-[rgba(245,245,250,0.8)] mb:top-[calc(28.5vh+80px)] mb:text-[20px]">
      <span>{now.format("YYYY年MM月DD日")}&nbsp;&nbsp;</span>
      {showChineseCalendar && <span>{now.lunar("月日")}&nbsp;&nbsp;</span>}
      <span>{now.format("dddd")}</span>
    </p>
  );
};
