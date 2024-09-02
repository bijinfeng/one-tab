import { FC, PropsWithChildren, ReactNode } from "react";

const GroupTitle: FC<PropsWithChildren> = (props) => (
  <div className="font-bold text-[16px] text-color-t1">{props.children}</div>
);

const GroupItem: FC<PropsWithChildren<{ label: string; control: ReactNode }>> = ({ label, children, control }) => (
  <>
    <div className="flex items-center justify-between">
      <span className="flex-1 text-[14px] text-color-t2">{label}</span>
      <div className="flex-shrink-0">{control}</div>
    </div>
    {children}
  </>
);

const GroupContent: FC<PropsWithChildren> = (props) => <div className="pt-[16px]">{props.children}</div>;

const GroupSeparator: FC = () => <div className="border-b border-color-m2 border-opacity-[0.06] my-5" />;

const Group: FC<PropsWithChildren> = (props) => (
  <div className="h-full main-content px-[70px] py-[40px] hi-scroll">{props.children}</div>
);

export const Block = Object.assign(Group, {
  Title: GroupTitle,
  Item: GroupItem,
  Content: GroupContent,
  Separator: GroupSeparator,
});
