import { Plus } from "@/icons";

export const AddButton = () => {
  return (
    <div className="add-icon-content icon-box icon-home flex cursor-pointer items-center justify-center border-[1px] border-[rgba(255,255,255,0.6)] bg-[rgba(209,209,214,0.9)]">
      <div className="text-2xl text-[rgba(255,255,255,0.6)]">
        <Plus />
      </div>
    </div>
  );
};
