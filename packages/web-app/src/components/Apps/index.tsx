import { Sortable } from "./Sortable";

const mockData: OneTab.App[] = [
  {
    id: "icon-1hk65aktk1ggj21kjnr26ljdfbi",
    name: "节日",
    type: "widget",
    widgetName: "widget-timer-festival",
    widgetSize: "large",
  },
  {
    id: "icon-1gmsq34njpzpc3al4krevh5jg9",
    name: "日历",
    type: "widget",
    widgetName: "widget-calendar",
    widgetSize: "medium",
  },
  {
    id: "icon-xxxx",
    name: "全屏时钟",
    type: "widget",
    widgetName: "widget-clock-fullscreen",
    widgetSize: "small",
  },
  {
    id: "icon-xxx121x",
    name: "天气",
    type: "widget",
    widgetName: "widget-clock-fullscreexxn",
    widgetSize: "small",
  },
  {
    id: "icon-x123xx121x",
    name: "纪念日",
    type: "widget",
    widgetName: "widget-clock-fullscresdfdexxn",
    widgetSize: "small",
  },
  {
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/6efae19e3745f1fd15009efa9700fb9a.png",
    bgType: "image",
    id: "icon-xxxxsdf",
    name: "Github",
    target: "https://www.github.com/",
    type: "site",
  },
];

export const Apps = () => {
  return (
    <div className="home-icon absolute h-full w-full">
      <div className="pt-[25vh] mx-auto w-[85%]">
        <Sortable items={mockData} />
      </div>
    </div>
  );
};
