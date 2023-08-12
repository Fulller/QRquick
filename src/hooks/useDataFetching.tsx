import { useState } from "react";

enum statusNum {
  LOADING = 0,
  LOADED = 1,
  NODATA = 2,
}
export function useDataFetching(): any {
  const [state, setState] = useState<statusNum>(statusNum.LOADING);
  return [state, setState, statusNum];
}
