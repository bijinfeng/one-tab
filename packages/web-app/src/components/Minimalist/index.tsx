import { IconButton } from '@/components/IconButton'
import { useSettingStore } from '@/store/setting'
import { cn, Dropdown, Popover } from '@onetab/ui'
import { useHover } from 'ahooks'
import { Icon } from "@/components/Icon"

import { type FC, useRef, useState } from 'react'
import { useWidgets } from './useWidgets'

export const Minimalist: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isHover = useHover(ref)
  const { minimalistMode, minimalistSwitchBtnStatus, updateSetting } = useSettingStore()
  const [swtichOpen, setSwitchOPen] = useState(false)
  const renderWidgets = useWidgets()

  return (
    <div
      className={cn('top-right-btns fixed right-0 top-0 flex items-center p-[14px] transition-all', {
        'opacity-0 hover:opacity-100': minimalistSwitchBtnStatus === 'auto-hide',
        'opacity-100': swtichOpen,
      })}
    >
      <div
        className={cn('relative flex items-center rounded-[16px] bg-color-black bg-opacity-0 p-[8px] space-x-4', {
          'backdrop-blur-[20px] backdrop-saturate-150 bg-opacity-20': isHover || swtichOpen,
        })}
      >
        <Dropdown
          open={swtichOpen}
          onOpenChange={setSwitchOPen}
          modal={false}
          className="w-24"
          align="start"
          side="left"
          sideOffset={20}
          menuItems={[
            {
              key: 'auto-hide',
              label: '自动隐藏',
              onClick: () => updateSetting({ minimalistSwitchBtnStatus: 'auto-hide' }),
            },
            {
              key: 'show',
              label: '一直显示',
              onClick: () => updateSetting({ minimalistSwitchBtnStatus: 'show' }),
            },
          ]}
        >
          <IconButton
            ref={ref}
            size="large"
            ghost
            className={cn('rotate-90 opacity-0 hover:opacity-100', {
              'opacity-100': swtichOpen,
            })}
          >
            <Icon size={20} name='single_hover_icon' />
          </IconButton>
        </Dropdown>

        {minimalistMode
          ? (
            <>
              <Popover
                content={renderWidgets()}
                collisionPadding={8}
                className="shadow-none border-none h-auto w-[340px] rounded-[20px] bg-color-white bg-opacity-40 p-[12px] backdrop-blur backdrop-saturate-150"
              >
                <IconButton size="large" ghost>
                  <Icon size={28} name='deploy_icon' />
                </IconButton>
              </Popover>
              <IconButton size="large" ghost onClick={() => updateSetting({ minimalistMode: false })}>
                <Icon size={28} name='standard_icon' />
              </IconButton>
            </>
          )
          : (
            <IconButton size="large" ghost onClick={() => updateSetting({ minimalistMode: true })}>
              <Icon size={28} name='minimalism' />
            </IconButton>
          )}
      </div>
    </div>
  )
}
