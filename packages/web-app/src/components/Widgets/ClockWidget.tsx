import { useSettingStore } from "@/store/setting";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const ClockWidget = () => {
  const [time, setTime] = useState(dayjs());
  const { show24HR } = useSettingStore();

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(timerID); // 清除定时器
  }, []);

  return (
    <div className="item-center mt-[28.5vh] flex font-mind-demi-bold text-[130px] leading-[100px] text-[rgba(245,245,250,0.8)] mb:text-[70px] mb:leading-[70px] icon-box">
      <p>{time.format(show24HR ? "HH:mm:ss" : "hh:mm:ss")}</p>
    </div>
  );
};
