import { FC } from "react";

import { AddAppModal } from "./AddApp";
import { AddWidgetModal } from "./AddWidget";
import { LoginModal } from "./Login";

export const Modals: FC = () => {
  return (
    <>
      <AddAppModal />
      <AddWidgetModal />
      <LoginModal />
    </>
  );
};
