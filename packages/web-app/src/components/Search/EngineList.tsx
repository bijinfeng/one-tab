import { Close, Plus } from "@icon-park/react"
import { useSearchStore } from "@/store/search"

export function EngineList() {
  const { currentId, defaultList, currentIdList, setCurrentId } = useSearchStore()

  const currentEngineList = currentIdList.map(it => defaultList.find(item => item.id === it)!)

  return (
    <ul className="wrapper px-[20px] pt-[20px] pb-[24px] text-[12px] relative grid grid-cols-[repeat(auto-fill,48px)] gap-[20px]">
      {currentEngineList.map(item => (
        <li key={item.id} className="search-drop flex flex-col items-center">
          <div className="group cursor-pointer icon search-drag relative flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-color-white bg-opacity-80 transition-colors hover:bg-opacity-100 dark:bg-opacity-[0.06] dark:hover:bg-opacity-20">
            {currentId !== item.id && (
              <section className="hi-close cursor-pointer flex items-center justify-center rounded-[50%] bg-color-b4 shadow-close-btn transition-opacity absolute top-[-8px] left-[-8px] h-6 w-6 opacity-0 group-hover:opacity-100">
                <Close strokeWidth={8} size={10} className="icon-close_icon text-color-t4 transition-[transform,color] duration-300" />
              </section>
            )}

            <section
              className="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
              style={{ backgroundImage: `url(${item.bgImage})`, backgroundColor: item.bgColor }}
              onClick={() => setCurrentId(item.id)}
            />
          </div>
          <div className="mt-[4px] w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-color-t3">{item.name}</div>
        </li>
      ))}

      <li className="flex flex-col items-center">
        <div className="icon flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-80 transition-colors hover:bg-opacity-100 dark:bg-opacity-[0.06] dark:hover:bg-opacity-20">
          <Plus size={24} className="text-color-t3" />
        </div>
        <div className="mt-[4px] w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-color-t3">添加</div>
      </li>
    </ul>
  )
}
