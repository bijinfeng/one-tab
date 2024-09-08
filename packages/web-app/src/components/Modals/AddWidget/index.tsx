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
      <DialogContent className="max-w-[400px] overflow-hidden h-[551px] bg-color-b3 px-[50px] py-[33px]"></DialogContent>
    </Dialog>
  );
};
