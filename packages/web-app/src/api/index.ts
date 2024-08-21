import axios, { type CancelTokenSource } from "axios"

let cancelSource: CancelTokenSource

export async function getSearchSuggestion(keyword: string) {
  if (!keyword)
    return []

  cancelSource && cancelSource.cancel()

  const CancelToken = axios.CancelToken
  cancelSource = CancelToken.source()

  const res = await axios.get(`https://api.52vmy.cn/api/wl/word/baidu?msg=${keyword}`, { cancelToken: cancelSource.token })

  return res
}
