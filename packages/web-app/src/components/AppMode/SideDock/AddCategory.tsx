import { IconButton } from '@/components/IconButton'
import { cn, Icon, Popover } from '@onetab/ui'
import { useRef, useState } from 'react'
import { Icon as SvgIcon } from "@/components/Icon"

const DEFAULT_CATEGORIES = [
  { name: '主页', icon: 'zhuye' },
  { name: '设计', icon: 'sheji' },
  { name: '程序', icon: 'chengxu' },
  { name: '图片', icon: 'tupian' },
  { name: '娱乐', icon: 'yule' },
  { name: '购物', icon: 'gouwu' },
  { name: '资讯', icon: 'zixun' },
  { name: '金融', icon: 'jinrong' },
  { name: '阅读', icon: 'yuedu' },
  { name: '工具', icon: 'gongju' },
  { name: '网络', icon: 'wangluo' },
  { name: '产品', icon: 'chanpin' },
  { name: '创意', icon: 'chuangyi' },
  { name: '摄影', icon: 'sheying' },
  { name: '科技', icon: 'keji' },
  { name: '汽车', icon: 'qiche' },
  { name: '旅游', icon: 'lvyou' },
  { name: '地理', icon: 'dili' },
  { name: '天文', icon: 'tianwen' },
  { name: '绘画', icon: 'huihua' },
  { name: '音乐', icon: 'yinle' },
  { name: '健康', icon: 'jiankang' },
  { name: '健身', icon: 'jianshen' },
  { name: '体育', icon: 'tiyu' },
  { name: '餐饮', icon: 'canyin' },
  { name: '建筑', icon: 'jianzhu' },
  { name: '电影', icon: 'dianying' },
  { name: '社交', icon: 'shejiao' },
  { name: 'AI工具', icon: 'ai' },
]

export function AddCategory() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [nameText, setNameText] = useState(() => DEFAULT_CATEGORIES[0].name)

  const handleItemClick = (name: string, index: number) => {
    setNameText(name)
    setActiveIndex(index)
    inputRef.current?.focus()
  }

  return (
    <Popover
      align="end"
      side="right"
      sideOffset={14}
      className="sidebar-category glass-card !border-none border-color-white border-opacity-40 bg-color-m1 bg-opacity-80 py-[8px] px-[6px] dark:border-opacity-10 dark:bg-opacity-70 w-auto"
      content={(
        <>
          <div className="name mb-[10px] h-[32px] px-[1px]">
            <input
              ref={inputRef}
              value={nameText}
              autoFocus
              className="h-full w-full rounded-[6px] bg-color-m2 bg-opacity-[0.08] text-center text-[13px] text-color-t1 text-opacity-60 outline-none font-medium"
              onChange={e => setNameText(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-6 gap-[8px]">
            {DEFAULT_CATEGORIES.map((item, index) => (
              <div
                key={item.name}
                className={cn(
                  'cursor-pointer rounded-[8px] w-8 h-8 flex items-center justify-center transition-colors',
                  activeIndex === index
                    ? 'bg-color-white text-color-blue  dark:bg-opacity-[0.08]'
                    : 'text-color-t2 text-opacity-60 hover:bg-color-m2 hover:bg-opacity-[0.06]',
                )}
                onClick={() => handleItemClick(item.name, index)}
              >
                <SvgIcon name={item.icon} size={28} />
              </div>
            ))}
          </div>

          <div className="btn mt-[10px] flex justify-center px-[1px]">
            <button
              type="button"
              className="hi-button duration-150 text-color-blue hover:text-color-blue !dark:bg-opacity-[0.15] rounded-[6px] w-full h-[36px] px-[20px] text-[16px] bg-color-m1 active:text-color-t1 undefined"
            >
              <span className="flex items-center justify-center truncate text-[13px] font-medium">添加分类</span>
            </button>
          </div>
        </>
      )}
    >
      <IconButton size="huge" ghost>
        <Icon.AddCircle width={28} height={28} />
      </IconButton>
    </Popover>
  )
}
