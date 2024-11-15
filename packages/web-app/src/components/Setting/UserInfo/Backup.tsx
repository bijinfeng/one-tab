import { Block } from '@/components/SettingBlock'
import { events } from '@/events'
import { Button } from '@onetab/ui'
import { Icon } from "@/components/Icon"

export function Backup() {
  return (
    <div className="px-[70px] py-[40px]">
      <button
        type="button"
        className="flex w-full items-center justify-between border-b-[1px] border-color-m2 border-opacity-[0.06] pb-[20px]"
        onClick={() => events.emit('login')}
      >
        <div className="flex flex-1 items-center">
          <div className="mr-[20px] h-[48px] w-[48px] flex-shrink-0 overflow-hidden rounded-full">
            <Icon className='text-color-t4' size={48} name="dengdaisousuo" />
          </div>
          <div className="flex1 justify-self-start">
            <span className="block max-w-[200px] grow-0 overflow-hidden text-ellipsis whitespace-nowrap text-[18px] text-color-t1">
              登录/注册
            </span>
          </div>
        </div>
        <Icon className='text-color-t1' size={12} name="arrow_icon" />
      </button>
      <div className="mt-5">
        <Block.Title>备份数据</Block.Title>
        <Block.Content>
          <Block.Item
            label="导出备份数据"
            subTitle="将本地数据导出"
            control={(
              <Button>
                <Icon className='mr-2' size={18} name="export_icon" />
                导出
              </Button>
            )}
          />
          <Block.Item
            label="导入备份数据"
            subTitle="将本地数据导入"
            control={(
              <Button>
                <Icon className='mr-2' size={18} name="import_icon" />
                导入
              </Button>
            )}
          />
        </Block.Content>
      </div>
    </div>
  )
}
