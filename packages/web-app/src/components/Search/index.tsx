import { CloseOne } from "@icon-park/react"
import { Popover, PopoverContent, PopoverTrigger } from "@pingtou/shadcn-ui"
import { useState } from "react"

import { IconButton } from "../IconButton"
import { useSearchStore } from "@/store/search"

export function Search() {
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState("")

  const { currentId, defaultList } = useSearchStore()
  const currentEngine = defaultList.find(item => item.id === currentId)!

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      window.open(currentEngine.target.replace("%s", encodeURIComponent(keyword)))
  }

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[12vh] w-[568px] transition-opacity duration-100">
      <Popover open={open}>
        <PopoverTrigger asChild>
          <div className="bg-color-m1 flex h-[52px] rounded-xl overflow-hidden border border-color-white border-opacity-10 bg-opacity-60 search-box focus-within:bg-opacity-80">
            <div className="w-[52px] flex items-center justify-center">
              <IconButton onClick={() => setOpen(true)}>
                <span
                  className="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
                  style={{ backgroundImage: `url(${currentEngine?.bgImage})`, backgroundColor: currentEngine?.bgColor }}
                />
              </IconButton>
            </div>
            <input
              placeholder="输入搜索内容"
              autoComplete="off"
              className="h-full flex-1 py-3 pl-1 pr-[42px] bg-[transparent] text-color-t1 placeholder:text-color-t1 placeholder:text-opacity-40 outline-none text-base"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {keyword && (
              <div className="absolute top-0 right-0 flex h-full w-[52px] items-center justify-center hi-demand">
                <button type="button" className="h-[32px] w-[32px]" onClick={() => setKeyword("")}>
                  <CloseOne theme="filled" className="text-[16px] text-color-t2 duration-150" />
                </button>
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[568px] engine-box glass-card border-color-white border-opacity-40 bg-color-m1 bg-opacity-80 px-[20px] pt-[20px] pb-[24px] dark:border-opacity-10 dark:bg-opacity-70"
          onPointerDownOutside={() => setOpen(false)}
        >
          xxx
        </PopoverContent>
      </Popover>
    </div>
  )
}
