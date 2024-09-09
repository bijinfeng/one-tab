import { events } from "@/events";
import { Dialog, DialogContent } from "@pingtou/shadcn-ui";
import { useMount } from "ahooks";
import { FC, useState } from "react";

export const AddWidgetModal: FC = () => {
  const [open, setOpen] = useState(false);

  useMount(() => {
    events.on("addWidget", () => setOpen(true));
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[1024px] max-w-[calc(100vw-40px)] overflow-hidden h-[640px] max-h-[calc(100vh-40px)] bg-color-m1 bg-opacity-70 backdrop-blur-[40px] rounded-[12px]"></DialogContent>
    </Dialog>
  );
};
