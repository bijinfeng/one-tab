import { type FC, useRef } from "react"
import { MoreOne, Sleaves } from "@icon-park/react"
import { useHover } from "ahooks"
import { cn } from "@pingtou/shadcn-ui"

export const Minimalist: FC = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const isHover = useHover(ref)

  return (
    <div className="top-right-btns fixed right-0 top-0 flex items-center p-[14px] transition-all">
      <div className={cn("relative flex items-center rounded-[16px] bg-color-black bg-opacity-0 p-[8px] space-x-4", { "backdrop-blur-[20px] backdrop-saturate-150 bg-opacity-20": isHover })}>
        <button ref={ref} className="h-[32px] w-[32px] flex items-center justify-center rounded-[8px] bg-color-black bg-opacity-0 opacity-0 transition-all hover:bg-opacity-20 hover:opacity-100">
          <MoreOne size={28} color="white" className="text-color-white text-opacity-40" />
        </button>
        <button className="h-[32px] w-[32px] flex items-center justify-center rounded-[8px] bg-color-black bg-opacity-0 transition-all hover:bg-opacity-20 !opacity-100">
          <Sleaves size={20} className="text-color-white text-opacity-40" />
        </button>
      </div>
    </div>
  )
}
