import darkPng from '@/assets/images/dark.png'
import lightPng from '@/assets/images/light.png'
import { Block } from '@/components/SettingBlock'
import { useTheme } from '@/hooks/useTheme'
import { useSettingStore } from '@/store/setting'
import { cn, Radio, Switch } from '@onetab/ui'
import type { FC } from 'react'

export const ThemeSetting: FC = () => {
  const { minimalistMode, updateSetting } = useSettingStore()
  const { theme, isSystem, setTheme, toggleSystemTheme } = useTheme()

  return (
    <Block>
      <Block.Title>主题</Block.Title>
      <Block.Content>
        <Block.Item label="跟随系统" control={<Switch checked={isSystem} onCheckedChange={toggleSystemTheme} />} />
        <Radio.Group disabled={isSystem} value={theme} onValueChange={value => setTheme(value as OneTab.ThemeMode)}>
          <div className="flex justify-between">
            <label className={cn('cursor-pointer', { 'cursor-not-allowed': isSystem })}>
              <img src={lightPng} className="w-[162px]" />
              <div className="pt-2 flex items-center gap-2 justify-center">
                <Radio value="light" className="text-[12px] text-color-t2">
                  浅色
                  {isSystem && theme === 'light' && '（当前系统模式）'}
                </Radio>
              </div>
            </label>
            <label className={cn('cursor-pointer', { 'cursor-not-allowed': isSystem })}>
              <img src={darkPng} className="w-[162px]" />
              <div className="pt-2 flex items-center gap-2 justify-center">
                <Radio value="dark" className="text-[12px] text-color-t2">
                  深色
                  {isSystem && theme === 'dark' && '（当前系统模式）'}
                </Radio>
              </div>
            </label>
          </div>
        </Radio.Group>
      </Block.Content>
      <Block.Separator />
      <Block.Item
        label="极简模式"
        control={
          <Switch checked={minimalistMode} onCheckedChange={checked => updateSetting({ minimalistMode: checked })} />
        }
      />
    </Block>
  )
}
