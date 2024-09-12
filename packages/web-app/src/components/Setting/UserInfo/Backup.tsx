import { Block } from '@/components/SettingBlock'
import { events } from '@/events'
import { Button } from '@onetab/ui'

export function Backup() {
  return (
    <div className="px-[70px] py-[40px]">
      <button
        className="flex w-full items-center justify-between border-b-[1px] border-color-m2 border-opacity-[0.06] pb-[20px]"
        onClick={() => events.emit('login')}
      >
        <div className="flex flex-1 items-center">
          <div className="mr-[20px] h-[48px] w-[48px] flex-shrink-0 overflow-hidden rounded-full">
            <i className="iconfont icon-dengdaisousuo text-[48px] text-color-t4 leading-none" />
          </div>
          <div className="flex1 justify-self-start">
            <span className="block max-w-[200px] grow-0 overflow-hidden text-ellipsis whitespace-nowrap text-[18px] text-color-t1">
              登录/注册
            </span>
          </div>
        </div>
        <i className="iconfont icon-arrow_icon text-[12px] text-color-t1 leading-none" />
      </button>
      <div className="mt-5">
        <Block.Title>备份数据</Block.Title>
        <Block.Content>
          <Block.Item
            label="导出备份数据"
            subTitle="将本地数据导出"
            control={(
              <Button>
                <i className="iconfont text-[18px] icon-export_icon mr-2" />
                导出
              </Button>
            )}
          />
          <Block.Item
            label="导入备份数据"
            subTitle="将本地数据导入"
            control={(
              <Button>
                <i className="iconfont text-[18px] icon-import_icon mr-2" />
                导入
              </Button>
            )}
          />
        </Block.Content>
      </div>
    </div>
  )
}
