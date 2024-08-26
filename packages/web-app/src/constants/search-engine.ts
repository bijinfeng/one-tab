import soIcon from "@/assets/360.png"
import baicuIcon from "@/assets/baidu.png"
import bingIcon from "@/assets/bing_new.png"
import duckduckgoIcon from "@/assets/duckduckgo.png"
import googleIcon from "@/assets/google.png"
import sougouIcon from "@/assets/sougou.png"
import yahooIcon from "@/assets/yahoo.png"
import yandexIcon from "@/assets/yandex.png"

export const searchEngineMap: OneTab.EngineInfo[] = [
  {
    id: "0",
    name: "百度",
    bgType: "image",
    bgImage: baicuIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://baidu.com/s?tn=15007414_15_dg&ie=utf-8&wd=%s",
  },
  {
    id: "1",
    name: "必应",
    bgType: "image",
    bgImage: bingIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://cn.bing.com/search?q=%s",
  },
  {
    id: "2",
    name: "谷歌",
    bgType: "image",
    bgImage: googleIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://www.google.com/search?q=%s",
  },
  {
    id: "3",
    name: "雅虎",
    bgType: "image",
    bgImage: yahooIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://search.yahoo.com/search?p=%s",
  },
  {
    id: "4",
    name: "Yandex",
    bgType: "image",
    bgImage: yandexIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://yandex.com/search/?clid=2324058&text=%s",
  },
  {
    id: "5",
    name: "DuckDuckGo",
    bgType: "image",
    bgImage: duckduckgoIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://duckduckgo.com/?q=%s",
  },
  {
    id: "6",
    name: "360搜索",
    bgType: "image",
    bgImage: soIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://www.so.com/s?src=lm&ls=sm2054017&lm_extend=ctype:4&q=%s",
  },
  {
    id: "7",
    name: "搜狗",
    bgType: "image",
    bgImage: sougouIcon,
    bgColor: "rgba(0,0,0,0)",
    target: "https://www.sogou.com/sogou?pid=sogou-site-7985672db979303a&query=%s",
  },
]
