interface IBasicSettingItem<V> {
  formType: "select" | "switch" | "block";
  key: string;
  label: string;
  value?: V;
  options?: { label: string; value: string }[];
  onChange?: (value: V) => void;
}

export const basicSettingGroup: Array<{ groupName: string; options: IBasicSettingItem<any>[] }> = [
  {
    groupName: "控制栏",
    options: [
      {
        formType: "select",
        key: "leftBarDisplayStatus",
        label: "侧边栏",
        options: [
          { label: "自动隐藏", value: "left" },
          { label: "一直显示", value: "right" },
          { label: "一直隐藏", value: "right" },
        ],
      },
    ],
  },
];

export const BasicSetting = () => {
  return (
    <div className="h-full main-content px-[70px] py-[40px] hi-scroll">
      <div className="hi-cell-group not-last:mb-[20px] not-last:border-b-[1px] not-last:border-color-m2 not-last:border-opacity-[0.06] not-last:pb-[20px]">
        <div className="font-bold text-[16px] text-color-t1">控制栏</div>
        <div className="pt-[16px]">
          <div className="flex items-center justify-between">
            <span className="flex-1 text-[14px] text-color-t2">侧边栏位置</span>
            <div className="flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
