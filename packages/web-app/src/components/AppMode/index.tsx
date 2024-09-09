import { FC } from "react";

import { Apps } from "./Apps";
import { ContextAction } from "./ContextAction";
import { SideDock } from "./SideDock";

export const AppMode: FC = () => {
  return (
    <ContextAction>
      <div className="home-icon absolute h-full w-full">
        <Apps />
        <SideDock />
      </div>
    </ContextAction>
  );
};
