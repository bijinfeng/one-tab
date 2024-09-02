import { Block } from "@/components/SettingBlock";
import { Fragment } from "react/jsx-runtime";

interface IBasicSettingItem<V> {
  formType: "select" | "switch" | "block";
  key: string;
  label: string;
  value?: V;
  options?: { label: string; value: string }[];
  onChange?: (value: V) => void;
}

const basicSettingGroup: Array<{ groupName: string; options: IBasicSettingItem<any>[] }> = [
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
    <Block>
      {basicSettingGroup.map((group, index) => (
        <Fragment key={index}>
          {index > 0 && <Block.Separator />}
          <Block.Title>{group.groupName}</Block.Title>
          <Block.Content>
            {group.options.map((item, idx) => (
              <Block.Item key={idx} label={item.label} control={null} />
            ))}
          </Block.Content>
        </Fragment>
      ))}
    </Block>
  );
};
