import { jsonpAdapter } from "@pingtou/axios-jsonp";
import axios, { type CancelTokenSource } from "axios";

let cancelSource: CancelTokenSource;

export async function getSearchSuggestion(keyword: string) {
  if (!keyword) return [];

  cancelSource && cancelSource.cancel();

  const CancelToken = axios.CancelToken;
  cancelSource = CancelToken.source();

  const res = await axios.get<{ s: string[] }>(`https://suggestion.baidu.com/su?wd=${keyword}`, {
    headers: { xxx: 1 },
    cancelToken: cancelSource.token,
    adapter: jsonpAdapter,
    callbackParamName: "cb",
  });

  return res.data.s;
}
