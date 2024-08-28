import { useSettingStore } from "@/store/setting";
import { CalebrityWidget } from "./CalebrityWidget";
import { CalendarWidget } from "./CalendarWidget";
import { ClockWidget } from "./ClockWidget";

export const Widgets = () => {
  const { showClock, showCalendar, showCalebrity } = useSettingStore();

  return (
    <div className="absolute flex w-full h-full flex-col items-center">
      {showClock && <ClockWidget />}
      {showCalendar && <CalendarWidget />}
      {showCalebrity && <CalebrityWidget />}
    </div>
  );
};
