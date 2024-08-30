import { getSearchSuggestion } from "@/api";
import { CloseOne } from "@icon-park/react";
import { cn } from "@pingtou/shadcn-ui";
import { useBoolean, useClickAway, useRequest } from "ahooks";
import { isEmpty } from "lodash-es";
import { useRef, useState } from "react";

import { useSearchStore } from "@/store/search";
import { IconButton } from "../IconButton";
import { EngineList } from "./EngineList";
import { SuggetionList } from "./SuggestionList";

export function Search() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, { setTrue, setFalse }] = useBoolean(false);
  const [keyword, setKeyword] = useState("");
  const [popoverType, setPopoverType] = useState<"engine" | "suggest">("engine");
  const { data = [], run } = useRequest(getSearchSuggestion, {
    manual: true,
    debounceWait: 300,
    debounceMaxWait: 500,
    debounceLeading: true,
  });

  const { currentId, defaultList } = useSearchStore();
  const currentEngine = defaultList.find((item) => item.id === currentId)!;

  useClickAway(() => setFalse(), containerRef);

  const handleSearch = (text: string) => {
    window.open(currentEngine.target.replace("%s", encodeURIComponent(text)));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch(keyword);
  };

  const hendleEngineIconClick = () => {
    setPopoverType("engine");
    setTrue();
  };

  const handleInputFocus = () => {
    setPopoverType("suggest");
    setTrue();
  };

  const handleInputChange = (text: string) => {
    setKeyword(text);
    run(text);
  };

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 -translate-x-1/2 top-[12vh] w-[568px] transition-opacity duration-100"
    >
      <div
        className={cn(
          "bg-color-m1 flex h-[52px] rounded-xl overflow-hidden border border-color-white border-opacity-10 bg-opacity-60 search-box focus-within:bg-opacity-80",
          { "bg-opacity-80": open },
        )}
      >
        <div className="w-[52px] flex items-center justify-center">
          <IconButton onClick={hendleEngineIconClick} className="opacity-100">
            <span
              className="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
              style={{
                backgroundImage: `url(${currentEngine?.bgImage})`,
                backgroundColor: currentEngine?.bgColor,
              }}
            />
          </IconButton>
        </div>
        <input
          placeholder="输入搜索内容"
          autoComplete="off"
          className="h-full flex-1 py-3 pl-1 pr-[42px] bg-[transparent] text-color-t1 placeholder:text-color-t1 placeholder:text-opacity-40 outline-none text-base"
          value={keyword}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />

        {keyword && (
          <div className="absolute top-0 right-0 flex h-full w-[52px] items-center justify-center hi-demand">
            <button type="button" className="h-[32px] w-[32px]" onClick={() => handleInputChange("")}>
              <CloseOne theme="filled" className="text-[16px] text-color-t2 duration-150" />
            </button>
          </div>
        )}
      </div>

      {open && popoverType === "engine" && (
        <div className="engine-box glass-card mt-[4px] !border-color-white border-opacity-40 bg-color-m1 bg-opacity-80 dark:border-opacity-10 dark:bg-opacity-70 w-full">
          <EngineList onClose={setFalse} />
        </div>
      )}

      {open && popoverType === "suggest" && !isEmpty(data) && (
        <div className="engine-box glass-card mt-[4px] !border-color-white border-opacity-40 bg-color-m1 bg-opacity-80 dark:border-opacity-10 dark:bg-opacity-70 w-full">
          <SuggetionList list={data} onSuggestClick={handleSearch} onSuggestChoose={setKeyword} />
        </div>
      )}
    </div>
  );
}
