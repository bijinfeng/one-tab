import { getHitokoto } from '@/api'
import { IconButton } from '@/components/IconButton'
import { useClipboard } from '@/hooks'

import { useCacheStore } from '@/store/cache'
import { Icon, toast } from '@onetab/ui'
import { useRequest } from 'ahooks'
import { CopyIcon, RefreshCwIcon } from 'lucide-react'
import type { FC } from 'react'

export const CalebrityWidget: FC = () => {
  const { celebrity, updateCache } = useCacheStore()
  const { data = celebrity, refresh } = useRequest(() => getHitokoto(), {
    onSuccess: data => updateCache({ celebrity: data }),
  })
  const { copyToClipboard } = useClipboard()

  const handleCopy = () => {
    copyToClipboard(data!.hitokoto)?.then(() => {
      toast.success('复制成功')
    })
  }

  if (!data)
    return null

  return (
    <div className="item-center absolute bottom-[131px] flex flex-col">
      <div className="relative group mt-[-24px] px-[70px] flex flex-row items-center break-words font-ali-55 text-[16px] leading-[22px] tracking-[1px] text-[rgba(245,245,250,0.8)]">
        <Icon.Comma width={20} height={20} className="mr-[12px] rotate-180" />
        <p className="max-h-[140px] overflow-y-scroll scrollbar-none">{data.hitokoto}</p>
        <Icon.Comma width={20} height={20} className="ml-[12px]" />
        <button className="absolute opacity-0 blur-bg gap-0.5 right-0 flex items-center rounded-[8px] bg-color-white bg-opacity-20 p-[2px] transition-colors group-hover:opacity-100">
          <IconButton size="small" ghost onClick={handleCopy}>
            <CopyIcon size={16} />
          </IconButton>
          <IconButton size="small" ghost onClick={refresh}>
            <RefreshCwIcon size={16} />
          </IconButton>
        </button>
      </div>
      <div className="mt-[16px] flex flex-col items-center font-ali-55 text-[16px] leading-[16px] tracking-[1px] text-[#FFF] opacity-60">
        <div className="pb-[16px] font-ali-55">
          《
          {data.from}
          》
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-[4px] h-[1px] w-[40px] bg-[#FFF]" />
          {data.from_who || '佚名'}
          <div className="ml-[4px] h-[1px] w-[40px] bg-[#FFF]" />
        </div>
      </div>
    </div>
  )
}
