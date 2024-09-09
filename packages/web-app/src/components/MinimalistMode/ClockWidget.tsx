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

  const hour24 = String(time.hour()).padStart(2, "0");
  const hour12 = String(time.format("hh")).padStart(2, "0");
  const minutes = String(time.minute()).padStart(2, "0");
  const seconds = String(time.second()).padStart(2, "0");

  return (
    <div className="item-center mt-[28.5vh] flex font-mind-demi-bold text-[130px] leading-[100px] text-[rgba(245,245,250,0.8)] mb:text-[70px] mb:leading-[70px] icon-box">
      <p className="flex-shrink-0 text-right">{show24HR ? hour24 : hour12}</p> :
      <p className="flex-shrink-0 text-center">{minutes}</p> :
      <p className="w-[170px] flex-shrink-0 text-left mb:w-[90px]">{seconds}</p>
    </div>
  );
};
