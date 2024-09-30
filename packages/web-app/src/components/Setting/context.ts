import React from "react";

export interface SettingContextState {
	portalRef: React.RefObject<HTMLDivElement>;
}

export const SettingContext = React.createContext<SettingContextState>(
	{} as SettingContextState,
);
