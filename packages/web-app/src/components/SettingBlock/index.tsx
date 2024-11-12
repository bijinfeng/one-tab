import { FC, PropsWithChildren, ReactNode } from "react";
import { ScrollArea } from "@onetab/ui"

const GroupTitle: FC<PropsWithChildren> = (props) => (
  <div className="font-bold text-[16px] text-color-t1">{props.children}</div>
);

const GroupItem: FC<PropsWithChildren<{ label: string; control: ReactNode; subTitle?: string }>> = ({
  label,
  children,
  control,
  subTitle,
}) => (
  <>
    <div className="flex items-center justify-between">
      <div className="flex-1 flex flex-col">
        <span className="text-[14px] text-color-t2">{label}</span>
        {subTitle && <span className="font-ali-55 text-[12px] text-color-t3 mt-1">将本地数据导出</span>}
      </div>
      <div className="flex-shrink-0">{control}</div>
    </div>
    {children}
  </>
);

const GroupContent: FC<PropsWithChildren> = (props) => <div className="pt-[16px] space-y-5">{props.children}</div>;

const GroupSeparator: FC = () => <div className="border-b border-color-m2 border-opacity-[0.06] my-5" />;

const Group: FC<PropsWithChildren> = (props) => (
  <ScrollArea className="h-full main-content px-[70px] py-[40px]">{props.children}</ScrollArea>
);

export const Block = Object.assign(Group, {
  Title: GroupTitle,
  Item: GroupItem,
  Content: GroupContent,
  Separator: GroupSeparator,
});
