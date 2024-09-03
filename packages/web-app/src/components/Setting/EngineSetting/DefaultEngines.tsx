import { useSearchStore } from "@/store/search";
import { Checkbox } from "@pingtou/shadcn-ui";
import { FC } from "react";

export const DefaultEngines: FC = () => {
  const { defaultList, currentIdList, toggleDefaultEngine } = useSearchStore();

  return (
    <div className="px-[70px]">
      {defaultList.map((item) => (
        <div
          key={item.id}
          className="search-list-item group mb-[8px] flex items-center justify-between rounded-[6px] px-[10px] py-[8px] duration-150 hover:bg-color-m2 hover:bg-opacity-[0.06]"
        >
          <div className="text-dot flex items-center">
            <section
              className="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] flex-shrink-0 rounded-[6px]"
              style={{ backgroundImage: `url(${item.bgImage})`, backgroundColor: item.bgColor }}
            />
            <span className="text-dot pl-[10px] text-[14px] text-color-t2">{item.name}</span>
          </div>

          <Checkbox
            checked={currentIdList.includes(item.id)}
            onCheckedChange={(checked: boolean) => toggleDefaultEngine(item.id, checked)}
          />
        </div>
      ))}
    </div>
  );
};
