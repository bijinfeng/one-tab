import { Block } from "@/components/SettingBlock";

import { Select } from "./components/Select";

export const BasicSetting = () => {
	return (
		<Block>
			<Block.Title>控制栏</Block.Title>
			<Block.Content>
				<Block.Item label="侧边栏" control={<Select />} />
			</Block.Content>
		</Block>
	);
};
